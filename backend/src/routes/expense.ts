import { Router } from 'express';

const router = Router();

router.get('/expense', (req, res) => {
  res.send('Expense data');
});

export default router;