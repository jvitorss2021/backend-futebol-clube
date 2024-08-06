import { Request, Router, Response } from 'express';
import TeamController from '../controller/teamController';

const router = Router();

router.get('/teams', (req: Request, res: Response) => TeamController.getAllTeams(req, res));
router.get('/teams/:id', (req: Request, res: Response) => TeamController.getTeamById(req, res));

export default router;
