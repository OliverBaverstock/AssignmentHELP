import dotenv from 'dotenv';
import express from 'express';
import dealsRouter from './api/deals';
import bodyParser from 'body-parser';
import {loadDeals} from './dealsData';
import './db';

dotenv.config();

const app = express();



// eslint-disable-next-line no-undef
const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use('/api/deals', dealsRouter);
app.use(express.static('public'));

// Populate DB with sample data
if (process.env.seedDb) {
  loadDeals();
}

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

