const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('http');
const path = require('path');

const app = express();

const FRONT_PORT = 3000;

const http = createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: `http://localhost:${FRONT_PORT}`, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

const router = require('../router');

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const changeStatusOrder = require('../socket/changeStatusOrder');

changeStatusOrder(io);

app.use(router);

const error = require('../middlewares/errorHandlers');

app.use(error);

module.exports = http;
