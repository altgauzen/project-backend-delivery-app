const express = require('express');
const bodyParser = require('body-parser');
const router = require('../router');
const error = require('../middlewares/errorHandlers');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
