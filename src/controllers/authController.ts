import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    if (email == null || password == null) {
        return res.status(400).send("missing email or password");
    }

    try {
        const user = await User.findOne({ email: email });
        if (user) {
            res.status(400).send("user already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email: email,
            password: hashedPassword
        });

        return res.status(200).send(newUser);

    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
};

const login = async (req: Request, res: Response) => {
    res.status(400).send("login");

    const email = req.body.email;
    const password = req.body.password;

    if (email == null || password == null) {
        return res.status(400).send("missing email or password");
    }

    try {
        const user = await User.findOne({ email: email });
        if (user == null) {
            return res.status(400).send("invalid email or password");
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(400).send("invalid password");
        }

        const accessToken = jwt.sign({
            _id: user._id
        }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRES
        });

        const refreshToken = jwt.sign({
            _id: user._id
        }, process.env.REFRESH_TOKEN_SECRET);

        if(user.tokens == null) {
            user.tokens = [refreshToken];
        } else {
            user.tokens.push(refreshToken);
        }
        await user.save();
        return res.status(200).send({
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    } catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
};

const logout = (req: Request, res: Response) => {
    res.status(400).send("logout");
};

export default {
    register,
    login,
    logout
};