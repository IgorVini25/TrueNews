import Cryptr from 'cryptr'
import { instanceToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import { AdminsRepository } from '../repositories/AdminsRepository'

interface iAdminParams {
  user_id: string
  password: string
  newName?: string
  newEmail?: string
  newPassword?: string
}

class EditAdminService {
  async execute({
    user_id,
    password,
    newName,
    newEmail,
    newPassword
  }: iAdminParams) {
    const adminsRepository = getCustomRepository(AdminsRepository)

    // Verify if admin exists
    const admin = await adminsRepository.findOne(user_id)

    // Verify if password is correct
    const cryptr = new Cryptr(process.env.SECRET_KEY)
    const decryptPassword = cryptr.decrypt(admin.password)
    if (password !== decryptPassword) {
      throw new Error('Password incorrect!')
    }

    // Verify if email exists
    const emailExists = await adminsRepository.findOne({
      email: newEmail
    })

    if (emailExists) {
      throw new Error('This email already exists!')
    }

    await adminsRepository.save(admin)

    return instanceToPlain(admin)
  }
}

export { EditAdminService }
