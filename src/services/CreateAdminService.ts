import Cryptr from 'cryptr'
import { getCustomRepository } from 'typeorm'
import { AdminsRepository } from '../repositories/AdminsRepository'

interface iAdminParams {
  name: string
  email: string
  password: string
}

class CreateAdminService {
  async execute({ name, email, password }: iAdminParams) {
    const adminsRepository = getCustomRepository(AdminsRepository)

    // Verify if email exists
    const adminExists = await adminsRepository.findOne({
      email
    })

    if (adminExists) {
      throw new Error('That email already exists!')
    }

    // Encrypt Password
    const cryptr = new Cryptr('f4b91f8e883e067d49b8cca92a5d5813')
    const passwordHash = cryptr.encrypt(password)

    // Create Admin
    const admin = adminsRepository.create({
      name,
      email,
      password: passwordHash
    })

    // Save at Database
    await adminsRepository.save(admin)

    return admin
  }
}

export { CreateAdminService }
