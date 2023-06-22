import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não necessario em um programa real
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> post
delete -> apaga um usuario -> delete
show -> mostra um usuario -> get
update -> atualiza um usuario -> patch ou put
*/
