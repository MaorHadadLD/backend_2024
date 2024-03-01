const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentRoute");
const postRoute = require("./routes/postRoute");
const bodyParser = require("body-parser");

const initApp = (callback) => {
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () =>  console.log("connected to db"));
    mongoose.connect(process.env.BASE_URL).then(() => {
        app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/student", studentRoute);
    app.use("/post", postRoute);
    callback(app);
    });
};




module.exports = app;
