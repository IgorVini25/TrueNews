import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Comment)
class CommentsRepository extends Repository<Comment> {}

export { CommentsRepository }
