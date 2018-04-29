var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var jwt = require('./controll/jwt');
// var index = require('./routes/index');
// var users = require('./routes/users');
// var todos = require('./routes/todos');
// var user = require('./routes/user');
// var role = require('./routes/role');
// var userCheckin = require('./routes/userCheckin');
// var userAddress = require('./routes/userAddress');


// set up the express app
var app = express();

// log requests to the console
app.use(logger('dev'));

//parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

//setup a default catch-all route that sends back a welcome message in JSON format
app.get('*', (req, res) => res.status(200).send({
  message: 'welcome to the beginning of nothingness.'
}))

// set up cross
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// load static source from public
app.use(express.static(path.join(__dirname, 'public')));

// setup cookie
app.use(cookieParser());


// routes
// app.use('/todos', todos);
// app.use('/user', user);
// app.use('/role', role);
// app.use('/userCheckin', userCheckin);
// app.use('/userAddress', userAddress);

//请求路由时，添加验证
// app.use(jwt.jwtVer);

// app.use('/', index);



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

module.exports = app;
