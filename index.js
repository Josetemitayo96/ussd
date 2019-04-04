require('dotenv').config();
const express = require ('express');
const app = express();
const port = process.env.PORT;
const router = require('./router/router');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

mongoose.connect('mongodb://hostel:hostel1234@ds153657.mlab.com:53657/ussd', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log('we are connected')
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(router);

app.listen(port, ()=>{
    console.log('listen on port 8000')
})