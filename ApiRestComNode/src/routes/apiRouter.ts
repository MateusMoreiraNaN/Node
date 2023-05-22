import { Router } from "express";

import * as ApiController from '../controllers/apiGameController'

const router = Router()

router.post('/game',ApiController.game)
router.get('/games', ApiController.games)
router.get('/game/:id', ApiController.gameId)


export default router