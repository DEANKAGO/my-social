const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require("./routes/posts");

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
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);


const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    console.log('backend is running $$');
})