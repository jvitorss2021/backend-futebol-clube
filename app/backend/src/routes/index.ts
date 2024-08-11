import { Router } from 'express';
import teamRouter from './team.routes';
import loginRouter from './login.routes';
import matchRouter from './matches.routes';
import leaderboardRouter from './leaderboard.routes';

const router = Router();

router.use('/', teamRouter);
router.use('/', loginRouter);
router.use('/', matchRouter);
router.use('/', leaderboardRouter);

export default router;
