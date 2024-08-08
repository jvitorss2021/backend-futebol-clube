import { Request, Response } from 'express';

const getRole = async (req: Request, res: Response) => {
  const { role } = req.body.user as { role: string };

  res.status(200).json({ role });
};

export default getRole;
