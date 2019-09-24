var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');

var router = express.Router();

var bookmarksRouter = require('./routes').bookmarks;
var likesRouter = require('./routes').likes;
var profilesRouter = require('./routes').profiles;
var usersRouter = require('./routes').users;
var videosRouter = require('./routes').videos;
var viewsRouter = require('./routes').views;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', {
    "title": "Extreme Dev"
  });
});

router.use('/bookmarks', bookmarksRouter)
router.use('/likes', likesRouter)
router.use('/profiles', profilesRouter)
router.use('/users', usersRouter)
router.use('/videos', videosRouter)
router.use('/views', viewsRouter)

app.use('/api', router);

// // Require our routes into the application.
// require('./db/routes')(app);

// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
