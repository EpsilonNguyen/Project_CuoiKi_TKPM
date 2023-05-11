import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

let instance = null;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected To MongoDB!');
    } catch (err) {
        throw err;
    }
};

const disconnect = async () => {
    await mongoose.disconnect();
    console.log('MongoDB Disconnected!');
};

const init = async () => {
    await connect();
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB Disconnected!');
    });
};

const getInstance = () => {
    if (!instance) {
        instance = { mongoose, connect, disconnect, init };
    }
    return instance;
};

export default getInstance();
