import { Request, Response } from "express"
import { User, UserInstance } from "../models/User"

export const users = async (req: Request, res: Response) => {
    res.send("Listagem de usúarios")
}

export const createUser = async (req: Request, res: Response) => {
    res.render("admin/users/create")
}

export const save = async (req: Request, res: Response)=>{
    let { email } = req.body
    let { password } = req.body

    res.json({email, password})
}
