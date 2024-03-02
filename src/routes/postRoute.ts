import express from "express";
const router = express.Router();
import posrController from "../controllers/posrController";

router.get("/", posrController.get.bind(posrController));

router.get("/:id", posrController.getById.bind(posrController));

router.post("/", posrController.post.bind(posrController));

router.put("/:id", posrController.put.bind(posrController));

router.delete("/:id", posrController.remove.bind(posrController));

export default router;