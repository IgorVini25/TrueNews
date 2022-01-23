import { getCustomRepository } from 'typeorm'
import { CommentsRepository } from '../repositories/CommentsRepository'

class LikeAndDislikeCommentService {
  async like(comment_id: string) {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const comment = await commentsRepository.findOne(comment_id)

    if (!comment) {
      throw new Error("This comment doesn't exists!")
    }

    comment.likes = +comment.likes + 1

    await commentsRepository.save(comment)

    return comment
  }

  async dislike(comment_id: string) {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const comment = await commentsRepository.findOne(comment_id)

    if (!comment) {
      throw new Error("This comment doesn't exists!")
    }

    comment.dislikes = +comment.dislikes + 1

    await commentsRepository.save(comment)

    return comment
  }

  async removeLike(comment_id: string) {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const comment = await commentsRepository.findOne(comment_id)

    if (!comment) {
      throw new Error("This comment doesn't exists!")
    }

    comment.likes = comment.likes - 1

    await commentsRepository.save(comment)

    return comment
  }

  async removeDislike(comment_id: string) {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const comment = await commentsRepository.findOne(comment_id)

    if (!comment) {
      throw new Error("This comment doesn't exists!")
    }

    comment.dislikes = comment.dislikes - 1

    await commentsRepository.save(comment)

    return comment
  }
}

export { LikeAndDislikeCommentService }
