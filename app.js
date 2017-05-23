var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const mongoose = require("mongoose");

var index = require('./routes/index');
var userRoutes = require("./routes/user");
var templateRoutes = require("./routes/templates");
var siteRoutes = require("./routes/sites");
var visitRoutes = require("./routes/visits");
var reportRoutes = require("./routes/report");
var reportImageRoutes = require("./routes/reportImages");


var app = express();
//mongoose.connect("Smart-Admin:huaweiDevelopers2017@ds131621.mlab.com:31621/smartdocs");
mongoose.connect("mongodb://SmartAdmin:huaweiDevelopers2017@msdrecursos.com:27017/smartdocs");
mongoose.Promise = global.Promise;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.disable('etag');

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
});

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/', index);
app.use('/user', userRoutes);
app.use('/templates', templateRoutes);
app.use('/sites', siteRoutes);
app.use('/visits', visitRoutes);
app.use('/reports', reportRoutes);
app.use('/reportsImg', reportImageRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;