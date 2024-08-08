import { Router } from 'express';
import teamRouter from './team.routes';
import loginRouter from './login.routes';
import matchRouter from './matches.routes';

const router = Router();

router.use('/', teamRouter);
router.use('/', loginRouter);
router.use('/', matchRouter);

export default router;
