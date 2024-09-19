import { Router } from 'express';
import userRoutes from './user';
import expenseRoutes from './expense';

const router = Router();

router.use('/users', userRoutes);
router.use('/expenses', expenseRoutes);

export default router;