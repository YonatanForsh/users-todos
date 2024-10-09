import exp from "express"
import dotenv from "dotenv"
import { connect } from "mongoose"
import { connectToMongo } from "./dal/dbLayer"
import  userRouter from "./routes/userRoutes"
// const cookieParser = require("cookie-parser")


const app = exp()
dotenv.config()
connectToMongo()

const port = process.env.PORT || 8000


app.use(exp.json())
app.use("/user", userRouter)



app.listen(port, () => console.log("Server running on: " + port))

