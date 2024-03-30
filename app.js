/*
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
 -------------------------

var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

const PORT = 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on https://localhost:${PORT}`);
});

module.exports = app;
 --------------------------
*/

var express = require("express");
var app = express();

const PORT = 6000;

app.get("/", (req, res) => {
  res.send("Welcome to homepage!");
});

app.post("/submit", (req, res) => {
  res.send("Submitted successfully");
});

app.get("/user/:userId", (req, res) => {
  var userId = req.params.userId;
  res.send(` User is ${userId}`);
});

app.put("/user/:userId", (req, res) => {
  var userId = req.params.userId;
  res.send(`User ${userId} updated successfully`);
});

app.delete("/user/:userId", (req, res) => {
  var userId = req.params.userId;
  res.send(`User ${userId} deleted successfully`);
});

app.listen(PORT, () => {
  console.log("listening on port ${PORT}");
});

module.exports = app;
