import express from "express";
import authController from "../controllers/authController";

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.get("/refresh", authController.refresh);


export default router;