import { Router } from 'express';
import { asyncRouteHandler } from '#src/utils/index.js';
import authentication from '#src/middlewares/authentication.js';
import { body } from 'express-validator';
import { getAll, getById, create } from './controller.js';
import validation from '#src/middlewares/validation.js';

const router = Router();

router.get('/',
  authentication,
  asyncRouteHandler(getAll)
);

router.get('/:id',
  authentication,
  asyncRouteHandler(getById)
);

router.post('/',
  body('name', 'name is required').not().isEmpty(),
  body('email', 'email is required').not().isEmpty(),
  body('email', 'email is invalid').isEmail(),
  body('name', 'name length must be greater or equal than 2').isLength({ min: 2 }),
  validation,
  asyncRouteHandler(create)
);

export default router;
