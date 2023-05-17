import { Router } from 'express'
import * as HomeController from '../controllers/homeController'
import * as CategoriesController from '../controllers/CategoriesController'
import adminAuth from '../Middlewares/authenticate'




const router = Router()

router.get('/', HomeController.home)
router.get('/:slug', HomeController.slug)
router.get('/category/:slug', HomeController.categorySlug)
router.get('/categorty')
router.get('/categories',  CategoriesController.categories)
router.get('/admin/categories/new',adminAuth, CategoriesController.admin)
router.post('/categories/delete',adminAuth, CategoriesController.deleteId)
router.post('/categories/save', CategoriesController.save)
router.get('/admin/categories/index',adminAuth, CategoriesController.adminCategory)
router.get('/admin/categories/edit/:id',adminAuth, CategoriesController.edit)
router.post('/categories/update',adminAuth, CategoriesController.update)

export default router


