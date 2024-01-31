const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.BASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () =>  console.log("connected to db"));


const studentRoute = require("./routes/student_route");

app.use(studentRoute);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

