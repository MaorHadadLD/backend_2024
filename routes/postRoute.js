const { Router } = require("express");
const router = express.Router();

Router.post("/", (req, res) => {
    res.send("post");
});

Router.get("/", (req, res) => {
    res.send("get");
});

Router.put("/", (req, res) => {
    res.send("put");
});

Router.delete("/:id", (req, res) => {
    res.send("delete");
});