import { Router } from 'express';
import MatchController from '../controller/matchController';

const matchRouter = Router();

matchRouter.get('/matches', (req, res) => MatchController.getAllMatches(req, res));

export default matchRouter;
