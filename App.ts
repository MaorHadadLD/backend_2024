import express from "express";
const app = express();
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";
import studentRoute from "./routes/studentRoute";
import postRoute from "./routes/postRoute";
import bodyParser from "body-parser";

const initApp = () => {
    const promise = new Promise(async (resolve, reject) => {
        const db = mongoose.connection;
        db.on("error", (error) => console.error(error));
        db.once("open", () =>  console.log("connected to db"));
        await mongoose.connect(process.env.BASE_URL)
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use("/student", studentRoute);
        app.use("/post", postRoute);
        resolve();
    });
    return promise;
    
};

module.exports = initApp;
