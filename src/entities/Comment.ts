import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Post } from './Post'
import { User } from './User'

@Entity('comments')
class Comment {
  @PrimaryColumn()
  readonly id: string

  @Column()
  post_id: string

  @JoinColumn({ name: 'post_id' })
  @ManyToOne(() => Post)
  postId: Post

  @Column()
  user_id: string

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User

  @Column()
  comment: string

  @Column()
  likes: number

  @Column()
  dislikes: number

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }

    if (!this.likes && !this.dislikes) {
      this.likes = 0
      this.dislikes = 0
    }
  }
}

export { Comment }
