"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../services/userService");
const register = async (req, res) => {
    try {
        await (0, userService_1.createUser)(req.body);
        res.status(201).json({
            msg: "User Created!"
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
};
const getUser = async (req, res) => {
    try {
        await (0, userService_1.getUserById)(req.body);
        res.status(200).json({});
    }
    catch (err) {
        res.status(400).json(err);
    }
};
exports;
register, ;
