import exp from "express"
const userRouter = exp.Router()
import { register, getUser, getAllUser, updateUser } from "../controllers/userController"



userRouter.get("/", getAllUser)

userRouter.get("/:id", getUser)

userRouter.post("/register", register)

userRouter.patch("/:id", updateUser)


export default userRouter
