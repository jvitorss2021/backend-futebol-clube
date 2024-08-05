import { Request, Router, Response } from 'express';
import getAllTeams from '../controller/teamController';

const router = Router();

router.get('/teams', (req: Request, res: Response) => getAllTeams(req, res));

export default router;
