import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequerid from '../middlewares/loginRequired';

const router = new Router();
router.get('/', alunoController.index);
router.post('/', loginRequerid, alunoController.store);
router.put('/:id', loginRequerid, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequerid, alunoController.delete);

export default router;
