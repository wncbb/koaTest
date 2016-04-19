'use strict';
var koa=require('koa');
var convert=require('koa-convert');
var serve=require('koa-static');
var indexRouter=require('./controllers/index.js');
var path=require('path');
var mount=require('koa-mount');
var render=require('koa-ejs');

var app=new koa();

app.use(serve(path.join(__dirname, 'static')));



render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'ejs',
  cache: false,
  debug: true
});

app.use(function*(next){
  console.log(this.request.url);
  yield next;
});

app.use(mount('/', indexRouter.routes()));

app.listen(3000);
