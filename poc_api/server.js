var express    = require('express');
var app        = express();
var port       = 8000;
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser')
var router     = express.Router();
var appRoutes  = require('./app/routes/api')(router); 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',appRoutes);

mongoose.connect('mongodb://sudhirtaneja:sudhir@ds014578.mlab.com:14578/poc_db',function(err){
    if(err){
        console.log('Not Connected to database 500');
    }else{
        console.log('Connected to database');
    }
});

app.listen(port, function(){
    console.log('Server running on port: ' + port);
});
