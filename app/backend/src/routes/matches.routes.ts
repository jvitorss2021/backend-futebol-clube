import { Router } from 'express';
import MatchController from '../controller/matchController';
import authMiddleware from '../middlewares/authMiddleware';

const matchRouter = Router();

matchRouter.get('/matches', (req, res) => MatchController.getAllMatches(req, res));
matchRouter.patch('/matches/:id/finish', authMiddleware, MatchController.finishMatch);

export default matchRouter;
