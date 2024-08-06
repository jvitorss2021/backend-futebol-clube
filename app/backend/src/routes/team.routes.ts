import { Request, Router, Response } from 'express';
import TeamController from '../controller/teamController';

const router = Router();

router.get('/teams', (req: Request, res: Response) => TeamController.getAllTeams(req, res));

export default router;
