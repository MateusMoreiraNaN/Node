import { Router } from 'express'
import * as ArticlesController from '../controllers/ArticlesController'

const router = Router()

router.get('/admin/articles', ArticlesController.articles)
router.get('/admin/articles/new', ArticlesController.adminArticles)
router.get('/admin/articles/edit/:id', ArticlesController.edit)
router.get('/articles/page/:num', ArticlesController.page)
router.post('/articles/save', ArticlesController.save)
router.post('/articles/delete', ArticlesController.deleteId)
router.post('/articles/update', ArticlesController.updateId)

export default router