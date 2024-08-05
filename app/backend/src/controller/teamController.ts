import { Request, Response } from 'express';
import Team from '../database/models/team';

const getAllTeams = async (req: Request, res: Response): Promise<Response> => {
  try {
    const teams = await Team.findAll();
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
export default getAllTeams;
