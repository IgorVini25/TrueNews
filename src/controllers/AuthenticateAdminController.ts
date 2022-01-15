import { Request, Response } from 'express'
import { AuthenticateAdminService } from '../services/AuthenticateAdmin'

class AuthenticateAdminController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const authenticateAdminService = new AuthenticateAdminService()

    const token = await authenticateAdminService.execute({
      email,
      password
    })

    return response.json(token)
  }
}

export { AuthenticateAdminController }
