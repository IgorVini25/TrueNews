import { Request, Response, NextFunction } from 'express'
import { sign, verify } from 'jsonwebtoken'

interface iPayLoad {
  sub: string
}

export function ensureUserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(' ')

  // Verify if token is valid
  try {
    const { sub } = verify(token, process.env.SECRET_KEY) as iPayLoad

    // Save user id
    request.user_id = sub

    next()
  } catch (err) {
    return response.status(401).end()
  }
}
