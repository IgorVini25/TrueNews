import { Router } from 'express'
const router = Router()

// Controllers
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateAdminController } from './controllers/CreateAdminController'
import { CreateCommentController } from './controllers/CreateComentController'
import { CreatePostController } from './controllers/CreatePostController'
import { CreateUserController } from './controllers/CreateUserController'
import { EditAdminController } from './controllers/EditAdminController'
import { EditUserController } from './controllers/EditUserController'

// Middlewares
import { ensureAdminAuthenticated } from './middlewares/ensureAdminAuthenticated'
import { ensureUserAuthenticated } from './middlewares/ensureUserAuthenticated'

// Admins Controllers
const createAdminController = new CreateAdminController()
const editAdminController = new EditAdminController()
const authenticateAdminController = new AuthenticateAdminController()

// Users Controllers
const createUserController = new CreateUserController()
const editUserController = new EditUserController()
const authenticateUserController = new AuthenticateUserController()

// Post Controllers
const createPostController = new CreatePostController()

// Comments Controllers
const createCommentController = new CreateCommentController()

// Admin
router.post('/admin/create', createAdminController.handle)
router.post('/admin/edit', ensureAdminAuthenticated, editAdminController.handle)

// User
router.post('/user/create', createUserController.handle)
router.post('/user/edit', ensureUserAuthenticated, editUserController.handle)

// Auth
router.post('/admin/auth', authenticateAdminController.handle)
router.post('/user/auth', authenticateUserController.handle)

// Post
router.post('/post/create', ensureAdminAuthenticated, createPostController.handle)

// Comment
router.post('/comment/create', createCommentController.handle)

export { router }
