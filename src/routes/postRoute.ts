import express from "express";
const router = express.Router();
import posrController from "../controllers/posrController";

router.get("/", posrController.get);

router.get("/:id", posrController.getById);

router.post("/", posrController.post);

router.put("/:id", posrController.put);

router.delete("/:id", posrController.remove);

export default router;