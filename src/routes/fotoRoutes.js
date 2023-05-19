import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);
// const uploads= multer(multerConfig); salvar varios arquivos ao mesmo tempo
// router.post('/', upload.fields('foto'), fotoController.store);

const router = new Router();
router.post('/', upload.single('foto'), fotoController.store);

export default router;
