import { Router } from 'express'
import * as HomeController from '../controllers/homeController'
import * as CategoriesController from '../controllers/CategoriesController'
import * as ArticlesController from '../controllers/ArticlesController'

const router = Router()

router.get('/', HomeController.home)
router.get('/categories', CategoriesController.categories)
router.get('/admin/categories/new', CategoriesController.admin)
router.post('/categories/save', CategoriesController.save)
router.get('/articles', ArticlesController.articles)
router.get('/admin/articles/new', ArticlesController.adminArticles)

export default router