import { Request, Response } from 'express'
import { EditUserService } from '../services/EditUserService'

class EditUserController {
  async handle(request: Request, response: Response) {
    const { password, newName, newEmail, newPassword } = request.body
    const editUserService = new EditUserService()

    const user = await editUserService.execute({
      user_id: request.user_id,
      password,
      newName,
      newEmail,
      newPassword
    })

    return response.json(user)
  }
}

export { EditUserController }
