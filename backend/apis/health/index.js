import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send({message: 'service is running'});
});

export default router;
