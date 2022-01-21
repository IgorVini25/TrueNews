import { EntityRepository, Repository } from 'typeorm'
import { Post } from '../entities/Post'

@EntityRepository(Post)
class PostsRepository extends Repository<Post> {}

export { PostsRepository }
