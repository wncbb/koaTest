var router=require('koa-router');
var indexRouter=new router();

indexRouter.get('/test', function*(){
  yield this.render('test', {
    name: 'wtf',
    title: 'test V1'
  });
});

indexRouter.get('/login', function*(){
  yield this.render('login', {
    title: 'login',
  });
});

indexRouter.post('/verifyUser', function*(){
  var username=this.request.body.username;
  var password=this.request.body.password;
  console.log('-------------------');
  console.log(username+':'+password);
  console.log(this.request);
  //
  //this.body=username+':'+password

  if(username=='a' && password=='1')
  {
    this.body={code: 1};
    
  }else{
    this.body={code: 0};
  }


});

module.exports=indexRouter;
