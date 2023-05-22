import { Request, Response } from "express";
import { Games } from "../models/games";

export const game = async(req: Request, res: Response)=>{
    let { title, year, price } = req.body

    let newGame = await Games.create({
        title, year, price
    })

    res.json({ id: newGame.id, title, year, price })
}

export const games = async(req: Request, res: Response)=>{
    let list = await Games.findAll()

    res.json({ list })
}