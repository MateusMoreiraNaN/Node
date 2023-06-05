import { Request, Response } from "express";
import { User } from "../models/userModel";

export const register = async(req: Request, res: Response)=>{
    if(req.body.email && req.body.senha){
        let { email, senha } = req.body

        let hashUser = await User.findOne({where:email})

        if(!hashUser){
            let newUser = await User.create({
                email, senha
            })

            res.json({id: newUser.id})
            return
        }else{
            res.json({error: 'E-mail já existe'})
        }

        
    }else{
        res.json({error: 'E-mail e/ ou senha não enviados'})
    }
}

export const login = async(req: Request, res: Response)=>{
    if(req.body.email && req.body.senha){
        let email: string = req.body.email
        let senha: string = req.body.senha

        let user = await User.findOne({
            where:{email, senha}
        })

        if(user){
            res.json({status: true})
        }else{
            res.json({status: false})
        }
    }
}