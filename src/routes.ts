import { Router } from 'express'
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController'
import { CreateAdminController } from './controllers/CreateAdminController'
import { CreateUserController } from './controllers/CreateUserController'
import { EditAdminController } from './controllers/EditAdminController'
import { ensureAdminAuthenticated } from './middlewares/ensureAdminAuthenticated'
const router = Router()

// Admins Controllers
const createAdminController = new CreateAdminController()
const editAdminController = new EditAdminController()
const authenticateAdminController = new AuthenticateAdminController()

// Users Controllers
const createUserController = new CreateUserController()

// Admin
router.post('/admin/create', createAdminController.handle)
router.post('/admin/edit', ensureAdminAuthenticated, editAdminController.handle)

// User
router.post('/user/create', createUserController.handle)

// Auth
router.post('/admin/auth', authenticateAdminController.handle)

export { router }
