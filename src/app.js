import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
// import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  `${process.env.APP_URL}`,
  `${process.env.APP_URL}:80`,
  `${process.env.APP_URL}:81`,
  `${process.env.APP_URL}:82`,
  `${process.env.DATABASE_HOST}`,
  `${process.env.DATABASE_HOST}:80`,
  `${process.env.DATABASE_HOST}:81`,
  `${process.env.DATABASE_HOST}:82`,
  'http://localhost:3000/',
  'http://localhost:3000',
  'http://localhost:3001/',
  'http://localhost:3001',
];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whiteList.indexOf(req.header('Origin') !== -1)) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use(cors(corsOptionsDelegate));
    // this.app.use(helmet());
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/foto/', fotoRoutes);
  }
}

export default new App().app;
