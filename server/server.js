const express = require('express');
const xss = require('xss');
const mongoSanitize = require('mongo-sanitize');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cluster = require('cluster');
const { cpus } = require('os');

const app = express();
const port = process.env.PORT || 9000;
process.env.UV_THREADPOOL_SIZE = 8;

app.use(xss());
app.use(helmet());
app.use(mongoSanitize());
app.use(cors());

if (cluster.isMaster) {
  const num_cpus = require('os').cpus.length;

  for (let i = 0; i < num_cpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', () => {
    console.log('Cluster died. Spawning new cluster');
    cluster.fork();
  });
} else {
  app.listen(port, () => {
    console.log('SERVER STARTED');
  });
}
