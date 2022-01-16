import { instanceToPlain } from 'class-transformer'
import Cryptr from 'cryptr'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

interface iUserParams {
  user_id: string
  password: string
  newName?: string
  newEmail?: string
  newPassword?: string
}

class EditUserService {
  async execute({
    user_id,
    password,
    newName,
    newEmail,
    newPassword
  }: iUserParams) {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne(user_id)

    // Verify if password is correct
    const cryptr = new Cryptr(process.env.SECRET_KEY)
    const decryptPassword = cryptr.decrypt(user.password)
    if (password !== decryptPassword) {
      throw new Error('Password incorrect!')
    }

    // Some Errors
    if (
      newName === user.name &&
      newEmail === user.email &&
      newPassword === decryptPassword
    ) {
      throw new Error("New Name, Email, and Password can't be same!")
    }

    if (
      (newName === undefined &&
        newEmail === undefined &&
        newPassword === undefined) ||
      (newName === '' && newEmail === '' && newPassword === '')
    ) {
      throw new Error("New Name, Email, and Password can't be null!")
    }

    if (newName !== user.name && newName !== undefined) {
      user.name = newName
    }

    if (newEmail !== user.email && newEmail !== undefined) {
      user.email = newEmail
    }

    if (newPassword !== decryptPassword && newPassword !== undefined) {
      user.password = newPassword
    }

    await usersRepository.save(user)

    return instanceToPlain(user)
  }
}

export { EditUserService }
