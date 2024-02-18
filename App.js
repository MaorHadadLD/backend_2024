const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(process.env.BASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () =>  console.log("connected to db"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/students", studentRoute);
app.use("/posts", postRoute);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

