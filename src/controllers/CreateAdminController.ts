import { Request, Response } from 'express'
import { CreateAdminService } from '../services/CreateAdminService'

class CreateAdminController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body
    const createAdminService = new CreateAdminService()

    const admin = await createAdminService.execute({
      name,
      email,
      password
    })

    return response.json(admin)
  }
}

export { CreateAdminController }
