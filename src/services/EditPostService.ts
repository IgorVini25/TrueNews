import { getCustomRepository } from 'typeorm'
import { CommentsRepository } from '../repositories/CommentsRepository'
import { PostsRepository } from '../repositories/PostsRepository'

interface iEditPostParams {
  post_id: string
  title?: string
  body?: string
}

class EditPostService {
  async execute({ post_id = '', title, body }: iEditPostParams) {
    const postsRepository = getCustomRepository(PostsRepository)
    const commentsRepository = getCustomRepository(CommentsRepository)

    const post = await postsRepository.findOne(post_id)
    const postComments = await commentsRepository.find({
      post_id
    })

    if (!post) {
      throw new Error("This post doesn't exists!")
    }

    if (title !== undefined || '') {
      post.title = title
    }

    if (body !== undefined || '') {
      post.body = body
    }

    console.log(post)
    await postsRepository.save(post)

    post.comments = postComments

    return post
  }
}

export { EditPostService }
