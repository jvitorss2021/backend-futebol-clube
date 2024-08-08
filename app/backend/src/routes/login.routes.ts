import { Router } from 'express';
import loginController from '../controller/loginController';
import loginMiddleware from '../middlewares/loginMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import getRole from '../controller/roleController';

const loginRouter = Router();

loginRouter.post('/login', loginMiddleware, loginController);
loginRouter.get('/login/role', authMiddleware, getRole);

export default loginRouter;
