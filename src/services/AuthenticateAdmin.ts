import Cryptr from 'cryptr'
import { getCustomRepository } from 'typeorm'
import { AdminsRepository } from '../repositories/AdminsRepository'
import { sign } from 'jsonwebtoken'

interface iAuthenticateAdmin {
  email: string
  password: string
}

class AuthenticateAdminService {
  async execute({ email, password }: iAuthenticateAdmin) {
    const adminsRepository = getCustomRepository(AdminsRepository)

    const admin = await adminsRepository.findOne({
      email
    })

    if (!admin) {
      throw new Error('Password or Email incorrect!')
    }

    const cryptr = new Cryptr('f4b91f8e883e067d49b8cca92a5d5813')
    const decryptedPassword = cryptr.decrypt(admin.password)

    if (password !== decryptedPassword) {
      throw new Error('Password or Email incorrect!')
    }

    const token = sign(
      {
        email
      },
      'f4b91f8e883e067d49b8cca92a5d5813',
      {
        subject: admin.id,
        expiresIn: '2d'
      }
    )

    return token
  }
}

export { AuthenticateAdminService }
