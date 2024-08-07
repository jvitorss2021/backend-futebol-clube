import { Request, Response, NextFunction } from 'express';

const ValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const ValidPassword = (password: string) => password.length >= 6;

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!ValidEmail(req.body.email) || !ValidPassword(req.body.password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

export default loginMiddleware;
