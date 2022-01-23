import { getCustomRepository } from 'typeorm'
import { PostsRepository } from '../repositories/PostsRepository'

class LikeAndDislikePostService {
  async like(post_id: string) {
    const postsRepository = getCustomRepository(PostsRepository)

    const post = await postsRepository.findOne(post_id)

    if (!post) {
      throw new Error("This post doesn't exists!")
    }

    post.likes = +post.likes + 1

    await postsRepository.save(post)

    return post
  }

  async dislike(post_id: string) {
    const postsRepository = getCustomRepository(PostsRepository)

    const post = await postsRepository.findOne(post_id)

    if (!post) {
      throw new Error("This post doesn't exists!")
    }

    post.dislikes = +post.dislikes + 1

    await postsRepository.save(post)

    return post
  }

  async removeLike(post_id: string) {
    const postsRepository = getCustomRepository(PostsRepository)

    const post = await postsRepository.findOne(post_id)

    if (!post) {
      throw new Error("This post doesn't exists!")
    }

    post.likes = post.likes - 1

    await postsRepository.save(post)

    return post
  }

  async removeDislike(post_id: string) {
    const postsRepository = getCustomRepository(PostsRepository)

    const post = await postsRepository.findOne(post_id)

    if (!post) {
      throw new Error("This post doesn't exists!")
    }

    post.dislikes = post.dislikes - 1

    await postsRepository.save(post)

    return post
  }
}

export { LikeAndDislikePostService }
