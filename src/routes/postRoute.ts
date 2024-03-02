import express from "express";
const router = express.Router();
import posrController from "../controllers/posrController";

router.get("/", posrController.getPost);

router.get("/:id", posrController.getPostById);

router.post("/", posrController.postPost);

router.put("/:id", posrController.putPost);

router.delete("/:id", posrController.deletePost);

export default router;