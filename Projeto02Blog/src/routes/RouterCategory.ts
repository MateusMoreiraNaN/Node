import { Router } from 'express'
import * as HomeController from '../controllers/homeController'
import * as CategoriesController from '../controllers/CategoriesController'




const router = Router()

router.get('/', HomeController.home)
router.get('/:slug', HomeController.slug)
router.get('/categories', CategoriesController.categories)
router.get('/admin/categories/new', CategoriesController.admin)
router.post('/categories/delete', CategoriesController.deleteId)
router.post('/categories/save', CategoriesController.save)
router.get('/admin/categories/index', CategoriesController.adminCategory)
router.get('/admin/categories/edit/:id', CategoriesController.edit)
router.post('/categories/update', CategoriesController.update)

export default router