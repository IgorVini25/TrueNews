import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('comments')
class Comment {
  @PrimaryColumn()
  readonly id: string

  @Column()
  post_id: string

  @Column()
  user_id: string

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  userId: User

  @Column()
  comment: string

  @Column()
  likes: Number

  @Column()
  dislikes: Number

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Comment }
