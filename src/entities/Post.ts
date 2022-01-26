import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { Admin } from './Admin'
import { v4 as uuid } from 'uuid'

@Entity('posts')
class Post {
  @PrimaryColumn()
  readonly id: string

  @Column()
  title: string

  @Column()
  body: string

  @Column()
  author: string

  @JoinColumn({ name: 'author' })
  @ManyToOne(() => Admin)
  author_id: Admin

  @Column()
  likes: number

  @Column()
  dislikes: number

  comments: any[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

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

export { Post }
