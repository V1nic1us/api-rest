"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não necessario em um programa real
router.get('/', _loginRequired2.default, _UserController2.default.index);
router.get('/:id', _UserController2.default.show);

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> post
delete -> apaga um usuario -> delete
show -> mostra um usuario -> get
update -> atualiza um usuario -> patch ou put
*/
