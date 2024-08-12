import { Router } from 'express';
import LeaderboardController from '../controller/leaderboardController';

const leaderboardRouter = Router();

leaderboardRouter.get('/leaderboard/home', LeaderboardController.leaderboardHomeController);
leaderboardRouter.get('/leaderboard/away', LeaderboardController.leaderboardAwayController);

export default leaderboardRouter;
