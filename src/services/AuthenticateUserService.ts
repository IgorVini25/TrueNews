import Cryptr from 'cryptr'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

interface iAuthenticateUser {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: iAuthenticateUser) {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({
      email
    })

    if (!user) {
      throw new Error('Email or Password incorrect!')
    }

    const cryptr = new Cryptr(process.env.SECRET_KEY)
    const decryptedPassword = cryptr.decrypt(user.password)
    if (password !== decryptedPassword) {
      throw new Error('Email or Password incorrect!')
    }

    const token = sign(
      {
        email
      },
      process.env.SECRET_KEY,
      {
        subject: user.id,
        expiresIn: '7d'
      }
    )

    return token
  }
}

export { AuthenticateUserService }
