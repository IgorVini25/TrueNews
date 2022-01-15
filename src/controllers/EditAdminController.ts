import { Request, Response } from 'express'
import { EditAdminService } from '../services/EditAdminService'

class EditAdminController {
  async handle(request: Request, response: Response) {
    const { password, newName, newEmail } = request.body
    const editAdminService = new EditAdminService()

    const admin = await editAdminService.execute({
      user_id: request.admin_id,
      password,
      newName,
      newEmail
    })

    return response.json(admin)
  }
}

export { EditAdminController }
