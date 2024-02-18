const { Router } = require("express");
const router = express.Router();

Router.get("/", (req, res) => {
    res.send("post get");
});

Router.get("/:id", (req, res) => {
    res.send("post get by id");
});

Router.post("/", (req, res) => {
    res.send("post post");
});



Router.put("/:id", (req, res) => {
    res.send("post put");
});

Router.delete("/:id", (req, res) => {
    res.send("post delete");
});

module.exports = router;