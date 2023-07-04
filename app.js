const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const indexRoute = require('./routes');

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(indexRoute);

app.listen(port, () => {
  console.info(`Express run in port ${port}`);
});