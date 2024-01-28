const express = require("express");
const router = express.Router();

router.get("/student", (req, res) => {
    res.send("student get");
});

router.post("/student", (req, res) => {
    res.send("student post");
});

router.put("/student", (req, res) => {
    res.send("student put");
});

router.delete("/student", (req, res) => {
    res.send("student delete");
});


module.exports = router;