import { Router } from 'express';
import MatchController from '../controller/matchController';
import authMiddleware from '../middlewares/authMiddleware';

const matchRouter = Router();

matchRouter.get('/matches', MatchController.getAllMatches);
matchRouter.patch('/matches/:id/finish', authMiddleware, MatchController.finishMatch);
matchRouter.patch('/matches/:id', authMiddleware, MatchController.updateMatch);

export default matchRouter;
