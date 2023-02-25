import { Request, Response } from "express";
import { Op, where } from 'sequelize'
import { ImdbF, ImdbFnstance } from '../models/ImdbF'
import { ImdbT, ImdbTnstance } from "../models/ImdbT";



export const filmes = async (req: Request, res: Response)=>{

    let filme = await ImdbF.findAll()
    

    res.render('pages/filmes',{
        filme
    })
}

export const series = async (req: Request, res: Response)=>{

    let serie = await ImdbT.findAll()

    res.render('pages/series',{
        serie
    })
}


