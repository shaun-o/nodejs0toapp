var express = require("express");
var app = express();

var port = process.env.PORT;
var eventRouter  = require('./src/routes/eventRoutes');
var dbRouter  = require('./src/routes/dbRoutes');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

    
app.use('/Events', eventRouter);
app.use('/Db', dbRouter);

app.get('/', function(req, resp){
    //resp.send('Hello world');
    resp.render('index', {
        list: ['first value', 'second value', 'third value'],
        nav: [{link:'services', text: 'Services'},
        {link:'portfolio', text:'Portfolio'},
        {link:'About', text:'About'},
        {link:'Team', text:'Team'},
        {link:'Contact', text:'Contact'},
        {link:'Events', text: 'Events'}]
    });
});

app.get('/routing', function(req, resp){
    resp.send('Hello world - routing');
});


app.listen(port, function(err){
    console.log('The server is running on port: ' + port)
});