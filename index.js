'use strict';
var koa=require('koa');
var convert=require('koa-convert');
var serve=require('koa-static');
var indexRouter=require('./controllers/indexRouter.js');
var path=require('path');
var mount=require('koa-mount');
var render=require('koa-ejs');
var bodyParser=require('koa-bodyparser');

var app=new koa();

app.use(serve(path.join(__dirname, 'static')));

app.use(bodyParser());


render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'ejs',
  cache: false,
  debug: true
});

app.use(function*(next){
  console.log(this.request.ip+':'+this.request.url);
  yield next;
});

app.use(mount('/', indexRouter.routes()));

app.listen(3000);
