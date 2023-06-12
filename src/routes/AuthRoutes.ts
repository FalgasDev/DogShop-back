import { signUp } from "@/controllers/AuthController";
import { Router } from "express";

const authRouter = Router()

authRouter.post('/signup', signUp)
authRouter.post('/signin')

export default authRouter
