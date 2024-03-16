import express from "express";
const router = express.Router();
import StudentController from "../controllers/student_controller";
import authMiddleware from "../controllers/common/authMiddleware";

router.get("/", authMiddleware,  StudentController.get.bind(StudentController));
router.get("/:id", StudentController.getById.bind(StudentController));

router.post("/", authMiddleware, StudentController.post.bind(StudentController));

router.put("/:id", authMiddleware, StudentController.put.bind(StudentController));

router.delete("/:id", authMiddleware, StudentController.remove.bind(StudentController));

export default router;