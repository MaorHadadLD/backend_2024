import express from "express";
const router = express.Router();
import StudentController from "../controllers/student_controller";

router.get("/",  StudentController.get.bind(StudentController));
router.get("/:id", StudentController.getById.bind(StudentController));

router.post("/",  StudentController.post.bind(StudentController));

router.put("/:id",  StudentController.put.bind(StudentController));

router.delete("/:id",  StudentController.remove.bind(StudentController));

export default router;