require('dotenv').config();
const express = require ('express');
const app = express();
const port = process.env.PORT;
const router = require('./router/router');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(router);

app.listen(port, ()=>{
    console.log('listen on port 8000')
})