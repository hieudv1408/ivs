import router from '#src/apis/index.js'
import cors from 'cors';
import express from 'express';
const app = express();
import connectMongo from '#src/connections/mongo.js';

const start = async () => {
  await connectMongo();
  app.use(cors())
  app.use(express.json());
  app.use('/api', router);
  app.use((error, req, res, next) => {
    console.log('error', error);
    const status = error.status;
    res.status(status || 400).send({message: error.message || error});
  })
  app.listen(process.env.NODE_PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.NODE_PORT || 3000}`);
  });
}

start();