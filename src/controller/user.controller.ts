import { Request, Response } from 'express';
import UserService from '../service/user.service';

export default class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = req.body;
    const token = await this.userService.create(user);
    res.status(201).json({ token });
  }
}