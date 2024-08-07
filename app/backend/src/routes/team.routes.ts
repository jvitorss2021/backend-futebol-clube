import { Request, Router, Response } from 'express';
import TeamController from '../controller/teamController';

const teamRouter = Router();

teamRouter.get('/teams', (req: Request, res: Response) => TeamController.getAllTeams(req, res));
teamRouter.get('/teams/:id', (req: Request, res: Response) => TeamController.getTeamById(req, res));

export default teamRouter;
