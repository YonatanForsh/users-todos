"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbLayer_1 = require("./dal/dbLayer");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// const cookieParser = require("cookie-parser")
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, dbLayer_1.connectToMongo)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use("/user", userRoutes_1.default);
app.listen(port, () => console.log("Server running on: " + port));
