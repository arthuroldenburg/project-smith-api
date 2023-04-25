import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: User): Promise<void> {
    const userCreated = await this.model.create(user);
    console.log(userCreated);
  }
}

export default UserService;