import { Router } from "express";
import { getAllUsers, getUserById, login, signup } from "../controllers/user-controller";


const userRouter = Router();

userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/signup", signup)
userRouter.post("/login", login)

export default userRouter