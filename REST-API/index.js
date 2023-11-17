const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

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

// mongoose.connect(
//     process.env.MONGO_URL,).then(() => {
//         console.log('connected to DB$$$$');
//     }).catch((error) => {
//         console.log('error connecting to DB$$$$:', error.message);
//     });


app.listen(8800, () => {
    console.log('backend is running $$');
})