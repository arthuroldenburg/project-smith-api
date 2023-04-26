import { Request, Response } from 'express';
// import validateLogin from '../middleware/login.middleware';
import LoginService from '../service/login.service';

export default class LoginController {
  loginService: LoginService;

  constructor(loginService = new LoginService()) {
    this.loginService = loginService;
    this.user = this.user.bind(this);
  }

  async user(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const token = await this.loginService.user(user);
    if (!token) return res.status(401).json({ message: 'Username or password invalid' });
    return res.status(200).json({ token });
  }
}