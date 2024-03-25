import express from "express";
const router = express.Router();
import posrController from "../controllers/posrController";
import authMiddleware from "../controllers/common/authMiddleware";


router.get("/", posrController.get.bind(posrController));

router.get("/:id", posrController.getById.bind(posrController));

router.post("/", authMiddleware, posrController.post.bind(posrController));

router.put("/:id", posrController.put.bind(posrController));

router.delete("/:id", posrController.remove.bind(posrController));

export default router;