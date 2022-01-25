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

    // Verify if email exists
    const emailExists = await usersRepository.findOne({
      email: newEmail
    })
    if (emailExists) {
      throw new Error('This email already exists!')
    }

    await usersRepository.save(user)

    return instanceToPlain(user)
  }
}

export { EditUserService }
