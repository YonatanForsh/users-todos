import exp from "express"
const userRouter = exp.Router()
import { register, getUser } from "../controllers/userController"


userRouter.get("/users", () => {})

userRouter.get("/users/:id", () => {})

userRouter.post("/register", register)

userRouter.patch("/users/:id", () => {})


export default userRouter
