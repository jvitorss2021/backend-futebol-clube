import { Request, Response } from 'express';
import loginService from '../service/loginService';

const login = async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const token = await loginService(req.body.email, req.body.password);
    return res.status(200).json({ token });
  } catch (error: unknown) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
};

export default login;
