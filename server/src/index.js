const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 2021;
const localhost = `localhost:${port}`;

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const todoRouter = require('./routes/taskRouter');

server.use('/todo', todoRouter);

server.listen(port,
  () => debug(`Server is running in ${chalk.magenta(localhost)}`));
