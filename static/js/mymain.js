
function change(num) {
  var P = document.getElementById('tx').getElementsByTagName('p');
  // 遍历对象。 
  for (var i = 0; i < P.length; i++) {
    if (i == num) {
      P[num].style.color = '#333';
      if (num == 1) {
        $('.lists-list .pic').hide();
        $('.lists-text span').offset();
        $('.lists-list').show();
        $('.text-list01 hr').show();
      };
      if (num == 0) {
        $('.lists-list .pic').show();
        $('.lists-list').show();
        $('.text-list01 hr').show();
      }
      if (num == 2) {
        // $('.lists-list').hide();
        // $('.text-list01 hr').hide();
        // $('.text-list01 hr').eq(0).show();
        $('.lists-list .pic').show();
        $('.lists-list').show();
        $('.text-list01 hr').show();
      }
    } else {

      P[i].style.color = '#999';
    }
  }

}

    function pic(num) {
      var I = document.getElementsByTagName('span');
      for (var i = 0; i < I.length; i++) {
        if (i == num) {
          I[0].style.display = 'block';
        } else {
          I[0].style.display = 'none';
        }
      }
    };


   //   function tabcustom(n){
   //    var Tab = document.getElementById('customul').getElementsByTagName('li');
   //    for(var i=0;i<Tab.length;i++){
   //       if(i==n){
   //          Tab[n].style.color = '#333';    
   //       }else{
   //          Tab[n].style.color = '#999';
   //       }
   //    }

   // }  


   //首页资产债券股权切换效果
  // $(function(){
  //           $("#customul li").click(function(){
  //               $(this).addClass("curr").siblings().removeClass("curr");
  //           });
  //         });




         //倒计时  success页面

   




    // register-html   表单校验 


    //  var validator1;
    //     $(document).ready(function () {
    //     validator1 = $("#Form").validate({
    //         debug: true,
    //         rules: {
    //             username: {
    //                 required: true,
    //                 minlength: 2,
    //                 maxlength: 10
    //                // email:true
    //             },
    //             password: {
    //                 required: true,
    //                 minlength: 2,
    //                 maxlength: 16
    //             },
    //             "confirm-password": {
    //                 equalTo: "#password"
    //             },
    //             number: {
    //                 required: true,
    //                 number:true,
    //                 minlength: 11,
    //                 maxlength: 11
    //             }
    //         },
    //         messages: {
    //             username: {
    //                 required: '请输入用户名',
    //                 minlength: '用户名不能小于2个字符',
    //                 maxlength: '用户名不能超过10个字符',
    //                 remote: '用户名不存在'
    //             },
    //             password: {
    //                 required: '请输入密码',
    //                 minlength: '密码不能小于2个字符',
    //                 maxlength: '密码不能超过16个字符'
    //             },
    //             "confirm-password": {
    //                 equalTo: "两次输入密码不一致"
    //             },

    //              number: {
    //                 required: '请输入正确的手机号',
    //                 number:'请输入正确的手机号',
    //                 minlength: '密码不能小于11个字符',
    //                 maxlength: '密码不能超过11个字符'
                  
    //             },

               
    //         },

    //         highlight: function(element, errorClass, validClass) {
    //             $(element).addClass(errorClass).removeClass(validClass);
    //             $(element).fadeOut().fadeIn();
    //         },
    //         unhighlight: function(element, errorClass, validClass) {
    //             $(element).removeClass(errorClass).addClass(validClass);
    //         },
    //         submitHandler: function (form) {
    //             console.log($(form).serialize())
    //         }
    //     });

    //     $("#check").click(function () {
    //         console.log($("#Form").valid() ? "填写正确" : "填写不正确");
    //     });
    // });






    function aa(){
          // alert('111');
          // document.getElementById('dd').style.display="block";
          var dd=document.getElementById('dd');
          if(dd.style.display=="block"){
          dd.style.display="none";
          }else{dd.style.display="block";}
                  }
                



     //release.html 

      function checks(val){
       if(val=='hide'){
         document.getElementById('isShow').style.display = 'none';
         document.getElementById('gdBox').style.display = 'block';
       };
       if(val=='show'){
         document.getElementById('isShow').style.display = 'block';
         document.getElementById('gdBox').style.display = 'none';
       };
       };



    

