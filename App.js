const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentRoute");
const postRoute = require("./routes/postRoute");
const bodyParser = require("body-parser");

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
