import { Router } from 'express';
import teamRouter from './team.routes';
import loginRouter from './login.routes';

const router = Router();

router.use('/', teamRouter);
router.use('/', loginRouter);

export default router;
