import { Pool, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/login.interface';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async validateUser(login: Login): Promise<string> {
    const { username, password } = login;
    const user = await this.connection.execute<RowDataPacket[]>(
      'SELECT username, password FROM Trybesmith.users WHERE username=? AND password=?',
      [username, password],
    );
    const [row] = user;
    console.log(row);
    if (row.length) return 'have';
    return 'not have';
  }
}