import { Router } from 'express'
import * as ArticlesController from '../controllers/ArticlesController'

const router = Router()

router.get('/articles', ArticlesController.articles)
router.get('/admin/articles/new', ArticlesController.adminArticles)

export default router