import express from "express";
import { loginView }from '../controller/logincontroller'
import { registerView } from "../controller/registercontroller";
import {authUser} from "../middleware/auth"
const router = express.Router();
router.get("/validate",authUser)
router.post("/register", registerView);
router.post('/login',loginView);

export { router };
