import { EntityRepository, Repository } from 'typeorm'
import { Admin } from '../entities/Admin'

@EntityRepository(Admin)
class AdminsRepository extends Repository<Admin> {}

export { AdminsRepository }
