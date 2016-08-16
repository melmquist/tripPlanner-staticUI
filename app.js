var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var models = require('./models');
var Place = require('./models/place.js'); // NOT SURE WHAT TO REQUIRE FOR SYNC AT BOTTOM
//Location...Hotels...

var indexRouter = require('./routes/routesIndex.js');
// var intermediateRouter = require('./routes/intermediateFile.js');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/homepage', indexRouter);
// app.use('/homepage', intermediateRouter);


app.get('/', function (req, res) {
    res.redirect('/homepage');
});

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   console.error(err);
//   res.render('errorPage'); // NOT SURE IF THIS IS CORRECT SYNTAX
// });


Place.sync()
    .then(function () {
        return Place.sync();
    })
    .then(function () {
        app.listen(3001, function () {
            console.log('Server is listening on port 3001!');
        });
    });
