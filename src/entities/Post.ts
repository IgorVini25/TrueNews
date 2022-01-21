import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { Admin } from './Admin'

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

  @JoinColumn({ name: 'post_author' })
  @OneToOne(() => Admin)
  author_id: Admin

  @Column()
  comments: string

  @JoinColumn({ name: 'post_comments' })
  @ManyToOne(() => Comment)
  comments_ids: Comment

  @Column()
  likes: Number

  @Column()
  dislikes: Number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export { Post }
