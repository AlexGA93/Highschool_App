import express from 'express';
const app = express();

//configuration
import configuration from './config';

require('dotenv').config();

// routes
const routes = require('./router/router');

// init
app.use(express.json());
app.use(routes);

const port = configuration.NODEPORT;

app.listen(port, () => console.log(`Server running at port ${port}!`));
