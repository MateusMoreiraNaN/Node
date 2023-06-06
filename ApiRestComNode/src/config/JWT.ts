/*
import passport from "passport"
import dotenv from 'dotenv'
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt"
import { Auth } from "../model/authModel"
import { Request, Response, NextFunction } from "express"
import JWT from 'jsonwebtoken'

dotenv.config()

const notAuthrorizeJson = { status: 401, message: 'Não autorizado' }

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string
}

passport.use(new JWTStrategy(options, async (payload, done)=>{

    const user = await Auth.findByPk(payload.id)   
    
    // se achar o id
    if(user){
        return done(null, user)
    }else{
        return done(notAuthrorizeJson, false)
    }


    //return(null, user)
    //return done(notAuthrorizeJson, user)
}))

export const generateToken = (data: object)=>{
    return JWT.sign(data, process.env.JWT_SECRET_KEY as string)
}

export const privateRoute = (req: Request, res: Response, next: NextFunction)=>{
    const authFunction = passport.authenticate('jwt', (err:any, user:string)=>{
        req.user = user
        if(user){
            next()
        }else{
            next(notAuthrorizeJson)
        }
    })
    authFunction(req, res, next)
}

export default passport
*/

import passport from 'passport'
import dotenv from 'dotenv'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { User } from '../models/userModel'
import JWT from 'jsonwebtoken'

dotenv.config()

const notAuthrorizeJson = { status:401, message: 'Não autorizado' }