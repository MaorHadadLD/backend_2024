const express = require("express")
const app = express();
const dotenv = require("dotenv").config();


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/home", (req,res) => {
    res.send("Hello Home!");
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening at http://localhost:${process.env.PORT}');
});

