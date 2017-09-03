var express = require('express');

var dbRouter = express.Router();

var mongodb = require("mongodb").MongoClient;

var eventsArray = [ {
    name: 'Event 1',
    description: 'The first event',
    date: '2016.01.01',
    time: '1:00 pm',
    duration: '1 hour',
    location: {
        streetAddr: '101 Main St.',
        city: 'Los Angeles',
        state: 'CA',
        zip: '878803',
        lon: 0,
        lat: 0,
    },
    capacity: 100,
},
    {
    name: 'Event 2',
    description: 'The first event',
    date: '2017.01.01',
    time: '1:00 pm',
    duration: '1 hour',
    location: {
        streetAddr: '101 Main St.',
        city: 'Los Angeles',
        state: 'CA',
        zip: '878803',
        lon: 0,
        lat: 0,
    },
    capacity: 100,
},
    {
    name: 'Event 3',
    description: 'The first event',
    date: '2018.01.01',
    time: '1:00 pm',
    duration: '1 hour',
    location: {
        streetAddr: '101 Main St.',
        city: 'Los Angeles',
        state: 'CA',
        zip: '878803',
        lon: 0,
        lat: 0,
    },
    capacity: 100,
},
    {
    name: 'Event 4',
    description: 'The first event',
    date: '2019.01.01',
    time: '1:00 pm',
    duration: '1 hour',
    location: {
        streetAddr: '101 Main St.',
        city: 'Los Angeles',
        state: 'CA',
        zip: '878803',
        lon: 0,
        lat: 0,
    },
    capacity: 100,
}

]


dbRouter.route('/AddEventData')
    .get(function(req, res){
        //res.send('Successful route test!');
        
        var url = 'mongodb://localhost:27017/eventsApp';
        
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('events');
            collection.insertMany(eventsArray, function(err, results) {
                res.send(results);
                db.close();
            });
        });
    })
    

module.exports = dbRouter;
