import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import shoeRoute from './routes/shoeRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import cartRoute from './routes/cartRoute.js';
import paymentRoute from './routes/paymentRoute.js';
import checkoutRoute from './routes/checkoutRoute.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';

const app = express();
dotenv.config();

// SESSION
app.use(
    session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: true,
    }),
);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected To MongoDB!');
    } catch (err) {
        throw err;
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Disconnected!');
});

//middleware
app.use(cookieParser());

app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: true,
    }),
);

app.options('*', cors({ credentials: true, origin: true }));

app.use('/shoeshop/api/auth', authRoute);
app.use('/shoeshop/api/user', userRoute);
app.use('/shoeshop/api/shoe', shoeRoute);
app.use('/shoeshop/api/review', reviewRoute);
app.use('/shoeshop/api/cart', cartRoute);
app.use('/shoeshop/api/payment', paymentRoute);
app.use('/shoeshop/api/checkout', checkoutRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Đang có một số lỗi xảy ra!';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
    connect();
    console.log('Connected To Database!');
});
