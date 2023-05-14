import { Router } from 'express'
import * as ArticlesController from '../controllers/ArticlesController'
import adminAuth from '../Middlewares/authenticate'

const router = Router()

router.get('/admin/articles',adminAuth, ArticlesController.articles)
router.get('/admin/articles/new', adminAuth , ArticlesController.adminArticles)
router.get('/admin/articles/edit/:id', adminAuth , ArticlesController.edit)
router.get('/articles/pages/:num', ArticlesController.page)
router.post('/articles/save', adminAuth , ArticlesController.save)
router.post('/articles/delete', adminAuth,  ArticlesController.deleteId)
router.post('/articles/update',adminAuth,  ArticlesController.updateId)

export default router