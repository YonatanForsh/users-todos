import { Request, Response } from "express"
import { createUser, getUserById, getUsers, updateUserDetails } from "../services/userService"



const register = async (req: Request, res: Response) => {
    try {
        await createUser(req.body)
        res.status(201).json({
            msg: "User Created!"
        })
    } catch (err) {
        res.status(400).json(err)
    }
}


const getUser = async (req: Request, res: Response) => {
    try {
        await getUserById(req.body)
        res.status(200).json({
            
        })
    } catch (err) {
        res.status(400).json(err)
    }
}


const getAllUser = async (req: Request, res: Response) => {
    try {
        await getUsers(req.body)
        res.status(200).json({
            
        })
    } catch (err) {
        res.status(400).json(err)
    }
}


const updateUser = async (req: Request, res: Response) => {
    try {
        await updateUserDetails(req.body)
        res.status(200).json({
            
        })
    } catch (err) {
        res.status(400).json(err)
    }
}



export {
    register,
    getUser,
    getAllUser,
    updateUser
}
