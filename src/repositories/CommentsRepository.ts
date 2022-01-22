import { EntityRepository, Repository } from 'typeorm'
import { Comment } from '../entities/Comment'

@EntityRepository(Comment)
class CommentsRepository extends Repository<Comment> {}

export { CommentsRepository }
