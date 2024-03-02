import express from "express";
const app = express();
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";
import studentRoute from "./routes/studentRoute";
import postRoute from "./routes/postRoute";
import bodyParser from "body-parser";
import { Express } from "express";

const initApp = () => {
    const promise = new Promise<Express>((resolve, reject) => {
        const db = mongoose.connection;
        db.on("error", (error) => console.error(error));
        db.once("open", () =>  console.log("connected to db"));
        mongoose.connect(process.env.BASE_URL).then(() => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use("/student", studentRoute);
        app.use("/post", postRoute);
        resolve(app);
        });
    });
    return promise;
    
};

export default initApp;
