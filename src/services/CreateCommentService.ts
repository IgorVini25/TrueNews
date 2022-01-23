import { getCustomRepository } from 'typeorm'
import { CommentsRepository } from '../repositories/CommentsRepository'
import { PostsRepository } from '../repositories/PostsRepository'

interface iCommentParams {
  post_id: string
  user_id: string
  message: string
}

class CreateCommentService {
  async execute({ post_id, user_id, message }: iCommentParams) {
    const commentsRepository = getCustomRepository(CommentsRepository)
    const postsRepository = getCustomRepository(PostsRepository)

    const postExists = await postsRepository.findOne(post_id)

    if (!postExists) {
      throw new Error("This post doesn't exists!")
    }

    const comment = commentsRepository.create({
      post_id,
      user_id,
      comment: message
    })

    await commentsRepository.save(comment)

    return comment
  }
}

export { CreateCommentService }
