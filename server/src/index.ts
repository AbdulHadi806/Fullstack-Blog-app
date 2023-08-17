import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connection from './db/db'; // Import the connection function from db module
import Routes from './routes/route';
import upload from './utils/multerConfig';

const app = express();
const PORT = 8000;

connection(); // Call the connection function

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/', Routes)

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
});
