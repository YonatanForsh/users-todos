"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const userController_1 = require("../controllers/userController");
userRouter.get("/", userController_1.getAllUser);
userRouter.get("/:id", userController_1.getUser);
userRouter.post("/register", userController_1.register);
userRouter.patch("/:id", userController_1.updateUser);
exports.default = userRouter;
