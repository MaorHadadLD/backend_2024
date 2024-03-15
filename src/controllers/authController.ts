import { Request, Response } from "express";

const register = (req: Request, res: Response) => {
    res.status(400).send("register");
};

const login = (req: Request, res: Response) => {
    res.status(400).send("login");
};

export default {
    register,
    login
};