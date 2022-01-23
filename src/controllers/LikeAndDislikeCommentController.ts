import { Request, Response } from 'express'
import { LikeAndDislikeCommentService } from '../services/LikeAndDislikeCommentService'

class LikeAndDislikeCommentController {
  async like(request: Request, response: Response) {
    const { comment_id } = request.body

    const likeAndDislikeCommentService = new LikeAndDislikeCommentService()

    const comment = await likeAndDislikeCommentService.like(comment_id)

    return response.json(comment)
  }

  async dislike(request: Request, response: Response) {
    const { comment_id } = request.body

    const likeAndDislikeCommentService = new LikeAndDislikeCommentService()

    const comment = await likeAndDislikeCommentService.dislike(comment_id)

    return response.json(comment)
  }

  async removeLike(request: Request, response: Response) {
    const { comment_id } = request.body

    const likeAndDislikeCommentService = new LikeAndDislikeCommentService()

    const comment = await likeAndDislikeCommentService.removeLike(comment_id)

    return response.json(comment)
  }

  async removeDislike(request: Request, response: Response) {
    const { comment_id } = request.body

    const likeAndDislikeCommentService = new LikeAndDislikeCommentService()

    const comment = await likeAndDislikeCommentService.removeDislike(comment_id)

    return response.json(comment)
  }
}

export { LikeAndDislikeCommentController }
