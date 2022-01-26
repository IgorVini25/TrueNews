import { Request, Response } from 'express'
import { EditPostService } from '../services/EditPostService'

class EditPostController {
  async handle(request: Request, response: Response) {
    const { post_id, title, body } = request.body

    const editPostService = new EditPostService()

    const post = await editPostService.execute({
      post_id,
      title,
      body
    })

    return response.json(post)
  }
}

export { EditPostController }
