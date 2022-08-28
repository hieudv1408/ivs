import { Router } from 'express';
import { setup, login } from './controller.js';
import { body } from 'express-validator';
import validation from '#src/middlewares/validation.js';
const router = Router();

export const asyncRouteHandler = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};


router.post('/setup',
  body('password', 'password is required').not().isEmpty(),
  body('password', 'password length must be greater or equal than 6').isLength({min: 6}),
  validation,
  asyncRouteHandler(setup)
);

router.post('/login',
  body('password', 'password is required').not().isEmpty(),
  body('username', 'username is required').not().isEmpty(),
  validation,
  asyncRouteHandler(login)
);

export default router;
