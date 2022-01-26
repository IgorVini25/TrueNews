import { Router } from 'express'
const router = Router()

// Controllers
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateAdminController } from './controllers/CreateAdminController'
import { CreateCommentController } from './controllers/CreateCommentController'
import { CreatePostController } from './controllers/CreatePostController'
import { CreateUserController } from './controllers/CreateUserController'
import { EditAdminController } from './controllers/EditAdminController'
import { EditPostController } from './controllers/EditPostController'
import { EditUserController } from './controllers/EditUserController'
import { LikeAndDislikeCommentController } from './controllers/LikeAndDislikeCommentController'
import { LikeAndDislikePostController } from './controllers/LikeAndDislikePostController'

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
const likeAndDislikePostController = new LikeAndDislikePostController()
const editPostController = new EditPostController()

// Comments Controllers
const createCommentController = new CreateCommentController()
const likeAndDislikeCommentController = new LikeAndDislikeCommentController()

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
router.post('/post/edit', ensureAdminAuthenticated, editPostController.handle)

// Comment
router.post('/comment/create', ensureUserAuthenticated, createCommentController.handle)

// Like and Dislike Post
router.post('/post/like', likeAndDislikePostController.like)
router.post('/post/dislike', likeAndDislikePostController.dislike)
router.post('/post/like/remove', likeAndDislikePostController.removeLike)
router.post('/post/dislike/remove', likeAndDislikePostController.removeDislike)

// Like and Dislike Comment
router.post('/comment/like', likeAndDislikeCommentController.like)
router.post('/comment/dislike', likeAndDislikeCommentController.dislike)
router.post('/comment/like/remove', likeAndDislikeCommentController.removeLike)
router.post('/comment/dislike/remove', likeAndDislikeCommentController.removeDislike)

export { router }
