import Cryptr from 'cryptr'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

interface iUserParams {
  name: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ name, email, password }: iUserParams) {
    const usersRepository = getCustomRepository(UsersRepository)

    const userExists = await usersRepository.findOne({
      email
    })

    if (userExists) {
      throw new Error('This email is already registered!')
    }

    const cryptr = new Cryptr(process.env.SECRET_KEY)
    const passwordHash = cryptr.encrypt(password)

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
