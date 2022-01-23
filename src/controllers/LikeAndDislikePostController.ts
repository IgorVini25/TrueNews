import { Request, Response } from 'express'
import { LikeAndDislikePostService } from '../services/LikeAndDislikePostService'

class LikeAndDislikePostController {
  async like(request: Request, response: Response) {
    const { post_id } = request.body

    const likeAndDislikePostService = new LikeAndDislikePostService()

    const post = await likeAndDislikePostService.like(post_id)

    return response.json(post)
  }

  async dislike(request: Request, response: Response) {
    const { post_id } = request.body

    const likeAndDislikePostService = new LikeAndDislikePostService()

    const post = await likeAndDislikePostService.dislike(post_id)

    return response.json(post)
  }

  async removeLike(request: Request, response: Response) {
    const { post_id } = request.body

    const likeAndDislikePostService = new LikeAndDislikePostService()

    const post = await likeAndDislikePostService.removeLike(post_id)

    return response.json(post)
  }

  async removeDislike(request: Request, response: Response) {
    const { post_id } = request.body

    const likeAndDislikePostService = new LikeAndDislikePostService()

    const post = await likeAndDislikePostService.removeDislike(post_id)

    return response.json(post)
  }
}

export { LikeAndDislikePostController }
