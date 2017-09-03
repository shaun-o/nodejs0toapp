var express = require('express');

var eventRouter = express.Router();

var mongodb = require("mongodb").MongoClient;

eventRouter.route('/')
    .get(function(req, res){
        
        var url = 'mongodb://localhost:27017/eventsApp';
        
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('events');
            collection.find({}).toArray(function(err,results){
                res.render('events', {
                list: ['first event', 'second event', 'third evewnt'],
                nav: [{link:'services', text: 'Services'},
                {link:'portfolio', text:'Portfolio'},
                {link:'About', text:'About'},
                {link:'Team', text:'Team'},
                {link:'Contact', text:'Contact'},
                {link:'Events', text: 'Events'}],
                events: results
                
            });
        });        
        
    });
    })
    
eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        res.render('event', {
        list: ['first event', 'second event', 'third evewnt'],
        nav: [{link:'services', text: 'Services'},
        {link:'portfolio', text:'Portfolio'},
        {link:'About', text:'About'},
        {link:'Team', text:'Team'},
        {link:'Contact', text:'Contact'},
        {link:'Events', text: 'Events'}],
        events: eventsArray[id]
    });
})

module.exports = eventRouter;

