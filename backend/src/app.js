import express from 'express';
import mongosse from 'mongoose';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.connect();
  }

  connect() {
    mongosse.connect(
      'mongodb+srv://git:git@cluster0-oofut.mongodb.net/github?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
