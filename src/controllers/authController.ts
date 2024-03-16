import { Request, Response } from "express";
import User from "../models/userModel";

const register = (req: Request, res: Response) => {
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
        
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
};

const login = (req: Request, res: Response) => {
    res.status(400).send("login");
};

const logout = (req: Request, res: Response) => {
    res.status(400).send("logout");
};

export default {
    register,
    login,
    logout
};