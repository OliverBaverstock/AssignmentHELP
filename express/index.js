import dotenv from 'dotenv';
import express from 'express';
import dealsRouter from './api/deals';
import bodyParser from 'body-parser';
import loadUsers from './userData';
import {loadDeals} from './dealsData';
import usersRouter from './api/users';
import passport from './auth';
import './db';

dotenv.config();

const app = express();



// eslint-disable-next-line no-undef
const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use(passport.initialize())

app.use('/api/users', usersRouter);

app.use(express.static('public'));

app.use('/api/deals', passport.authenticate('jwt', {session: false}), dealsRouter);

// Populate DB with sample data
if (process.env.seedDb) {
  loadDeals();
  loadUsers();
}

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

