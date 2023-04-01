import { Router } from 'express'
import * as ArticlesController from '../controllers/ArticlesController'

const router = Router()

router.get('/articles', ArticlesController.articles)
router.get('/admin/articles/new', ArticlesController.adminArticles)
router.post('/articles/save', ArticlesController.save)

export default router