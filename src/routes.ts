import { Router } from 'express'
const router = Router()

// Controllers
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateAdminController } from './controllers/CreateAdminController'
import { CreateUserController } from './controllers/CreateUserController'
import { EditAdminController } from './controllers/EditAdminController'

// Middlewares
import { ensureAdminAuthenticated } from './middlewares/ensureAdminAuthenticated'
import { ensureUserAuthenticated } from './middlewares/ensureUserAuthenticated'

// Admins Controllers
const createAdminController = new CreateAdminController()
const editAdminController = new EditAdminController()
const authenticateAdminController = new AuthenticateAdminController()

// Users Controllers
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

// Admin
router.post('/admin/create', createAdminController.handle)
router.post('/admin/edit', ensureAdminAuthenticated, editAdminController.handle)

// User
router.post('/user/create', createUserController.handle)

// Auth
router.post('/admin/auth', authenticateAdminController.handle)
router.post('/user/auth', authenticateUserController.handle)

export { router }
