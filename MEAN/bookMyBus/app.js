var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
                                                               // UNCOMMENT in DEVELOPMENT
//var cors = require("cors");                                   // to be commented in PRODUCTION BUILD

var auth = require('./routes/auth');
var adminconsole = require("./routes/adminconsole");
var userconsole = require("./routes/userconsole");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

                                                                 // UNCOMMENT in DEVELOPMENT
//app.use(cors());                                              // to be commented in PRODUCTION BUILD
               // to be USED here before other use() statements

app.use('/auth', auth);
app.use("/adminconsole", adminconsole);
app.use("/userconsole", userconsole);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(process.env.PORT);             // run on user specified PORT during DEVELOPMENT
                                         //  PRODUCTION and DEPLOYMENT env , default 3000 port

console.log("EXPRESS server up and RUNNING on port 3000 of 127.0.0.1");

module.exports = app;
