import { Router } from 'express';
import loginController from '../controller/loginController';
import loginMiddleware from '../middlewares/loginMiddleware';

const loginRouter = Router();

loginRouter.post('/login', loginMiddleware, loginController);

export default loginRouter;
