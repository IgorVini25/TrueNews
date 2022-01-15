import { Router } from 'express'
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController'
import { CreateAdminController } from './controllers/CreateAdminController'
import { EditAdminController } from './controllers/EditAdminController'
import { ensureAuthenticate } from './middlewares/ensureAdminAuthenticate'
const router = Router()

const createAdminController = new CreateAdminController()
const editAdminController = new EditAdminController()
const authenticateAdminController = new AuthenticateAdminController()

router.post('/admin/create', createAdminController.handle)
router.post('/admin/edit', ensureAuthenticate, editAdminController.handle)

// Auth
router.post('/admin/auth', authenticateAdminController.handle)

export { router }
