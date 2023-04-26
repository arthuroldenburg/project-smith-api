import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import createToken from '../token/create.token';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: User): Promise<string> {
    await this.model.create(user);
    const token = createToken(user.username);
    return token;
  }
}

export default UserService;