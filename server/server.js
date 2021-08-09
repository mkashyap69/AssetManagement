const express = require('express');
const path = require('path');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cluster = require('cluster');
const authRouter = require('./routes/authRouter');
const assetRouter = require('./routes/assetRoutes');
const errorController = require('./controller/errorController');
const { cpus } = require('os');
require('dotenv').config();

const port = process.env.PORT || 9000;
process.env.UV_THREADPOOL_SIZE = 8;

const app = express();

app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB STARTED'))
  .catch((err) => console.log(err));

if (cluster.isMaster) {
  const num_cpus = cpus().length;

  for (let i = 0; i < num_cpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', () => {
    console.log('Cluster died. Spawning new cluster');
    cluster.fork();
  });
} else {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/asset', assetRouter);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/build/index.html'));
  });
  app.use(errorController);

  app.listen(port, () => {
    console.log(`SERVER STARTED ON ${port}`);
  });
}
