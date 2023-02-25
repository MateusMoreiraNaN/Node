import { Request, Response } from "express";
import { Op, where } from 'sequelize'


export const home = async (req: Request, res: Response)=>{

    res.render('pages/home',{
        
    })
}