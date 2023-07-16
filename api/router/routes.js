import { Router } from 'express';
const router = Router();

/* import controllers */
import * as controller from '../controllers/controller.js';

router.get('/questions', controller.getQuestions);

router.post('/questions', controller.insertQuestions);

router.post('/lottery', controller.signupLottery);

export default router;
