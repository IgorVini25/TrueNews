import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface iPayLoad {
  sub: string
}

export function ensureAdminAuthenticated(
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

    // Save admin id
    request.admin_id = sub

    next()
  } catch (err) {
    return response.status(401).end()
  }
}
