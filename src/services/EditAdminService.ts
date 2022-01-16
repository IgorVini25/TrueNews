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

    // If all params be equals registered
    if (
      newName === admin.name &&
      newEmail === admin.email &&
      newPassword === decryptPassword
    ) {
      throw new Error("New Name, Email, and Password can't be same!")
    }

    // If all params be null
    if (
      (newName === undefined &&
        newEmail === undefined &&
        newPassword === undefined) ||
      (newName === '' && newEmail === '' && newPassword === '')
    ) {
      throw new Error("New Name, Email, and Password can't be null!")
    }

    // Verify if email exists
    const emailExists = await adminsRepository.findOne({
      email: newEmail
    })
    if (emailExists) {
      throw new Error('This email already exists!')
    }

    if (newName !== admin.name && newName !== undefined) {
      admin.name = newName
    }

    if (newEmail !== admin.email && newEmail !== undefined) {
      admin.email = newEmail
    }

    if (newPassword !== decryptPassword && newPassword !== undefined) {
      admin.password = newPassword
    }

    await adminsRepository.save(admin)

    return instanceToPlain(admin)
  }
}

export { EditAdminService }
