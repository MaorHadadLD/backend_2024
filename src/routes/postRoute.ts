import express from "express";
const router = express.Router();
import posrController from "../controllers/posrController";

router.get("/", posrController.getPost);

router.get("/:id", (req, res) => {
    res.send("post get by id");
});

router.post("/", (req, res) => {
    res.send("post post" + req.body);
});

router.put("/:id", (req, res) => {
    res.send("post put");
});

router.delete("/:id", (req, res) => {
    res.send("post delete");
});
export default router;