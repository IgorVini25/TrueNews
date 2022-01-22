import { Request, Response } from 'express'
import { CreatePostService } from '../services/CreatePostService'

class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, body } = request.body
    const { admin_id } = request

    const createPostService = new CreatePostService()

    const post = await createPostService.execute({
      title,
      body,
      author: admin_id
    })

    return response.json(post)
  }
}

export { CreatePostController }
