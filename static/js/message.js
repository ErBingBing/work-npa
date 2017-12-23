
		 var validator1;
        $(document).ready(function () {
        validator1 = $("#Form").validate({
            debug: true,
            rules: {
                username: {
                    required: true,
                    minlength: 2,
                    maxlength: 10
                   // email:true
                },
                password: {
                    required: true,
                    minlength: 2,
                    maxlength: 16
                },
                "confirm-password": {
                    equalTo: "#password"
                },
                number: {
                    required: true,
                    number:true,
                    minlength: 11,
                    maxlength: 11
                }
            },
            messages: {
                username: {
                    required: '请输入用户名',
                    minlength: '用户名不能小于2个字符',
                    maxlength: '用户名不能超过10个字符',
                    remote: '用户名不存在'
                },
                password: {
                    required: '请输入密码',
                    minlength: '密码不能小于2个字符',
                    maxlength: '密码不能超过16个字符'
                },
                "confirm-password": {
                    equalTo: "两次输入密码不一致"
                },

                 number: {
                    required: '请输入正确的手机号',
                    number:'请输入正确的手机号',
                    minlength: '密码不能小于11个字符',
                    maxlength: '密码不能超过11个字符'
                  
                },

               
            },

            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).fadeOut().fadeIn();
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
            },
            submitHandler: function (form) {
                console.log($(form).serialize())
            }
        });

        $("#check").click(function () {
            console.log($("#Form").valid() ? "填写正确" : "填写不正确");
        });
    });




