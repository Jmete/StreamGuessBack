var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
    next();
});

// app.use(function (req, res, next) {

//     bodyParser.json();

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

// app.use(bodyParser.json());

StreamLink = require('./models/streamlinks');

// Connect to Mongoose

mongoose.connect('mongodb://localhost/streams', {useMongoClient: true,});
var db = mongoose.connection;

// Initial page
app.get('/', function(req,res){
    res.send('Please use /api/books or /api/genres');
});

// Gets all of the streamlinks
app.get('/api/streamlinks', function(req,res){
    StreamLink.getStreamLinks(function(err, streamlinks){
        if(err){
            throw err;
        }
        res.json(streamlinks);
    });
});

// Gets a single streamlink
app.get('/api/streamlinks/:_id', function(req,res){
    StreamLink.getStreamLinkById(req.params._id, function(err, streamlink){
        if(err){
            throw err;
        }
        res.json(streamlink);
    });
});

// // Adds a streamlink
// app.post('/api/streamlinks', function(req,res){
//     var streamlink = req.body;
//     StreamLink.addStreamLink(streamlink, function(err, streamlink){
//         if(err){
//             throw err;
//         }
//         res.json(streamlink);
//     });
// });

// // Updates a streamlink
// app.put('/api/streamlinks/:_id', function(req,res){
//     var id = req.params._id;
//     var streamlink = req.body;
//     StreamLink.updateStreamLink(id, streamlink, {}, function(err, streamlink){
//         if(err){
//             throw err;
//         }
//         res.json(streamlink);
//     });
// });

app.listen(3000);
console.log('Running on Port 3000...');
