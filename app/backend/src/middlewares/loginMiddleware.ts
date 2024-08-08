import { Request, Response, NextFunction } from 'express';

const validEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validPassword = (password: string) => password.length >= 6;

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!validEmail(req.body.email) || !validPassword(req.body.password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

export default loginMiddleware;
