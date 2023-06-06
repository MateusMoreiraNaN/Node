import { Request, Response } from "express";
import { User } from "../models/userModel";
//import passport from "../config/JWT";
import JWT from 'jsonwebtoken'
import { generateToken } from "../config/JWT";

export const register = async(req: Request, res: Response)=>{
    if(req.body.email && req.body.senha && req.body.name){
        let { email, senha, name } = req.body

        let hashUser = await User.findOne({where:{email}})

        if(!hashUser){
            let newUser = await User.create({
                email, senha, name
            })

            const token = generateToken(
                {
                    id: newUser.id,
                    expiresIn: '5s'
                   
                }
            )
        

            res.json({id: newUser.id, token})
            return
        }else{
            res.json({error: 'E-mail já existe'})
        }

        
    }else{
        res.json({error: 'E-mail e/ ou senha não enviados'})
    }
}

export const login = async(req: Request, res: Response)=>{
    if(req.body.email && req.body.senha && req.body.name){
        let email: string = req.body.email
        let senha: string = req.body.senha
        let name: string = req.body.name

        let user = await User.findOne({
            where:{email, senha, name}
        })

        if(user){

            const token = generateToken(
                {
                    id: user.id,
                    expiresIn: '5s' 
                }
            )
            
            res.json({status: true, token})
        }else{
            res.json({status: false})
        }
    }
}