import express, { Request, Response } from 'express';
import { router } from './routes/loginRoute';
import cookieSession  from 'cookie-session';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)
app.use(cookieSession({
    name: 'session',
    keys: ['loggedIn']
  }))

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
