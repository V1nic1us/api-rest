import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Users from '../models/User';

const models = [Aluno, Users];

const conection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conection));
