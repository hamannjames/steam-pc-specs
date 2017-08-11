import { Router } from 'express';
import * as IndexController from './controllers/IndexController';

const router = new Router();

router.route('/').get(IndexController.index);

export default router;
