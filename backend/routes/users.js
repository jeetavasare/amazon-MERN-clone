import { Router } from "express";

import { getAllUsers } from "../controllers/UserController.js";
const userRouter = Router()

userRouter.get("/",getAllUsers)

export default userRouter