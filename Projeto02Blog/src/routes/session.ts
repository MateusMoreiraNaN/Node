import { Router } from "express";

import * as session from '../controllers/session'

const router = Router()

router.get("/session", session.sessionRouter)
router.get("/leitura", session.leitura)

export default router