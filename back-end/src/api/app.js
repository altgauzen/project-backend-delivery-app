const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer();
const router = require('../router');
const error = require('../middlewares/errorHandlers');

const app = express();

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(router);
app.use(error);

require('../socket/users')(io);
require('../socket/login')(io);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
