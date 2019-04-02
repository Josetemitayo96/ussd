const mongoose = require('mongoose');
mongoose.connect('mongodb://hostel:hostel1234@ds153657.mlab.com:53657/ussd', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log('we are connected')
})

module.exports = mongoose;