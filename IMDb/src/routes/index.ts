import { Router } from "express";

import * as HomeController from '../controllers/homeController'
import * as TvController from '../controllers/TvController'

const router = Router()

router.get('/', HomeController.home)
router.get('/filmes', TvController.filmes)
router.get('/series', TvController.series)

export default router