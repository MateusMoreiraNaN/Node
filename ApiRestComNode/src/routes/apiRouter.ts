import { Router } from "express";
import { privateRouter } from "../config/JWT";

import * as ApiController from '../controllers/apiGameController'

const router = Router()

router.post('/game', privateRouter , ApiController.game)
router.get('/games', privateRouter , ApiController.games)
router.get('/game/:id', privateRouter, ApiController.gameId)
router.delete('/game/:id', privateRouter, ApiController.deleteGame)
router.put('/game/:id', privateRouter, ApiController.updateGame)
router.patch('/game/:id', privateRouter, ApiController.oneUpdate)


export default router