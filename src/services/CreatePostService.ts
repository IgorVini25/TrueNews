import { getCustomRepository } from 'typeorm'
import { PostsRepository } from '../repositories/PostsRepository'

interface iPostParams {
  title: string
  body: string
  author: string
}

class CreatePostService {
  async execute({ title, body, author }: iPostParams) {
    const postsRepository = getCustomRepository(PostsRepository)

    const post = postsRepository.create({
      title,
      body,
      author
    })

    await postsRepository.save(post)

    return post
  }
}

export { CreatePostService }
