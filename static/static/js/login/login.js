$(document).ready(function(){
  $('#error-close').click(function(){
    $('#error-msg').css('display', 'none');
  });

  $('#sign-in').click(function(e){
    var sendData={};
    sendData.username=$('#username').val();
    sendData.password=$('#password').val();
    $.ajax({
      type: 'POST',
      url: '/nodejs/verifyUser',
      dataType: 'json',
      data: sendData,
      success: function(retData, status){
        if(retData.code==1){
          alert('success!');
        }else{
          var str='<div class="alert alert-warning alert-dismissible col-sm-6 col-sm-push-2 text-center" role="alert">\
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-label="Close" id="error-close">&times;</span></button>\
                  <strong>错误</strong><span id="error-text"></span>\
                </div>';
          $('#error-msg').css('display', 'block');
          $('#error-msg').html(str);
        }
      }
    });

  });




});
