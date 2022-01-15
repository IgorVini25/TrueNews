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
      throw new Error('This user already exists!')
    }

    const cryptr = new Cryptr('f4b91f8e883e067d49b8cca92a5d5813')
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
