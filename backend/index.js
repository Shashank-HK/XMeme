import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './routes/routes.js';

import dotenv from "dotenv";


const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json({extended : true}));
app.use(cors());

app.use('/memes', Routes);

app.get('/', (req,res) => {
    res.send('Hello from backend')
});

// connecting to database
const PORT = process.env.PORT || 8081;

mongoose.connect( process.env.LOCAL_CONN_URL, { useNewUrlParser :  true, useUnifiedTopology : true});


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
