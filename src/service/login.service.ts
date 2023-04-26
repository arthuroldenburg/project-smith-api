import connection from '../models/connection';
import LoginModel from '../models/login.model';
import Login from '../interfaces/login.interface';
import createToken from '../token/create.token';

export default class LoginService {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  async user(user: Login): Promise<string> {
    const newUser = await this.model.validateUser(user);
    if (newUser === 'have') {
      const token = createToken(user.username);
      return token;
    }
    return '';
  }
}