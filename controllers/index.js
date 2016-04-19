var router=require('koa-router');
var indexRouter=new router();

indexRouter.get('/test', function*(){
    yield this.render('test', {
        name: 'wtf'
    });
});

indexRouter.get('/login', function*(){
    yield this.render('login');
})

module.exports=indexRouter;
