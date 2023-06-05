import { Router } from "express";

import * as UserController from '../controllers/userController'

const router = Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)


export default router