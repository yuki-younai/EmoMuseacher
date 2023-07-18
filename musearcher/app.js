var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var databaseRouter = require('./routes/database');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var searchRouter = require('./routes/search');
var signinRouter = require('./routes/sign-in');
var uploadRouter = require('./routes/upload');
var listeninfoRouter = require('./routes/listeninfo');
var rankinglistRouter = require('./routes/rankinglist');
var recommendRouter = require('./routes/recommend');
var searchandplayRouter = require('./routes/searchandplay');
var mvlistRouter = require('./routes/mvlist');
var lyricRouter = require('./routes/lyric');
var commentRouter = require('./routes/comment');
var starRouter = require('./routes/star')
var gptRouter = require('./routes/gpt')
var sysRouter = require('./routes/sysmusic')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  //console.log('hello');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //将项目 /public 目录下所有静态文件托管至根目录。

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/database', databaseRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/search', searchRouter);
app.use('/sign-in', signinRouter);
app.use('/upload', uploadRouter);
app.use('/listeninfo', listeninfoRouter);
app.use("/rankinglist", rankinglistRouter);
app.use("/recommend", recommendRouter);
app.use("/searchandplay", searchandplayRouter);
app.use("/mvlist", mvlistRouter);
app.use("/lyric", lyricRouter);
app.use("/comment", commentRouter);
app.use("/star", starRouter);
app.use("/gpt", gptRouter);
app.use("/sysmusic",sysRouter);


//中间件按顺序依次匹配，前面的路径没有匹配上后到下一步

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
