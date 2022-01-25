import { Request, Response } from 'express'
import { CreateCommentService } from '../services/CreateCommentService'

class CreateCommentController {
  async handle(request: Request, response: Response) {
    const { post_id, message } = request.body

    const createCommentService = new CreateCommentService()

    const comment = await createCommentService.execute({
      post_id,
      user_id: request.user_id,
      message
    })

    return response.json(comment)
  }
}

export { CreateCommentController }
