import { Request, Response } from "express"
import { Userhome } from "../models/userHome"
import bcrypt, { hash } from 'bcrypt'

export const usershome = async (req: Request, res: Request)=>{
    
}

export const usercreate = async(req: Request, res: Response)=>{
    res.render("user/createhome")
}