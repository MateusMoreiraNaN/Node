import { Router } from 'express'
import * as HomeController from '../controllers/homeController'
import * as CategoriesController from '../controllers/CategoriesController'
import adminAuth from '../Middlewares/authenticate'




const router = Router()

router.get('/',adminAuth, HomeController.home)
router.get('/:slug',adminAuth, HomeController.slug)
router.get('/category/:slug',adminAuth, HomeController.categorySlug)
router.get('/categorty')
router.get('/categories',adminAuth,  CategoriesController.categories)
router.get('/admin/categories/new',adminAuth, CategoriesController.admin)
router.post('/categories/delete',adminAuth, CategoriesController.deleteId)
router.post('/categories/save',adminAuth, CategoriesController.save)
router.get('/admin/categories/index',adminAuth, CategoriesController.adminCategory)
router.get('/admin/categories/edit/:id',adminAuth, CategoriesController.edit)
router.post('/categories/update',adminAuth, CategoriesController.update)

export default router


