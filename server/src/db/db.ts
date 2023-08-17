import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = () => {
    mongoose
        .connect(`mongodb://localhost:27017/blogApp`, {})
        .then(() => {
            console.log('Connection successful with MongoDB');
        })
        .catch((err) => {
            console.log(err, 'Connection failed with MongoDB');
        });
};

export default connection;
