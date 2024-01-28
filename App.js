const express = require("express")
const app = express();
const dotenv = require("dotenv").config();


const studentRoute = require("./routes/student_route");

app.listen(process.env.PORT, () => {
    console.log('Example app listening at http://localhost:${process.env.PORT}');
});

