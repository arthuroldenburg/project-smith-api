import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../service/user.service';

export default class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = req.body;
    await this.userService.create(user);
    const token = jwt.sign(user.username, 'secret');
    res.status(201).json({ token });
  }
}