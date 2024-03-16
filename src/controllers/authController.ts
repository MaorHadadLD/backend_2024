import { Request, Response } from "express";

const register = (req: Request, res: Response) => {
    res.status(400).send("register");
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