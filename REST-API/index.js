const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();


async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to DB$$$$');
    } catch (error) {
        console.log(error);
    }
}
connect();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);



app.listen(8800, () => {
    console.log('backend is running $$');
})