import { Router } from 'express';
import healthRouter from './health/index.js';
import userRouter from './users/index.js';
import signupRouter from './signups/index.js';

const router = Router();

router.use('/health', healthRouter);
router.use('/users', userRouter);
router.use('/signups', signupRouter);

export default router;
