import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreatePostsTable1642727545161 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'body',
            type: 'varchar'
          },
          {
            name: 'author',
            type: 'uuid'
          },
          {
            name: 'likes',
            type: 'int',
            default: 0
          },
          {
            name: 'dislikes',
            type: 'int',
            default: 0
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKAuthor',
            referencedTableName: 'admins',
            referencedColumnNames: ['id'],
            columnNames: ['author'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts')
  }
}
