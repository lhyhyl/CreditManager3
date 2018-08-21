$(document).ready(function () {
//移除函数
        function remove() {
            if (judge($major.val())&&judge($grade.val())&&judge($department.val())
                &&judge($qqnumber.val())&&idValidator()&&phoneValidator()&&pwdValidator()&&repasswordValidator()&&nameValidator()) {
                $("#submit").removeAttr("disabled");
            }
        }

//判断函数
        function judge(name) {
            // alert(name);
            if (name == "" || name == null) {
                return false;
            } else {
                return true;
            }
        }

        //判断专业是否填写
        var $major = $("#major");
        $major.blur(function () {
            // if(judge($major.val())){}
            remove();
        });

        //判断年级是否选择
        var $grade = $("#grade");
        $grade.blur(function () {
            remove();
        });
        //判断系别是否选择
        var $department = $("#department");
        $department.blur(function () {
            remove();
        });

        //判断QQ是否填写
        var $qqnumber = $("#qqnumber");
        $qqnumber.blur(function () {
            remove();
        });

        //判断学号是否是以20开头，并且是12或13位
        var idcard = $(".s-idcard");
        var myreg = /^20[0-9]{10}$/;
        var reminder = $(".s-idcard-reminder");

        function idValidator() {
            if (myreg.test($.trim(idcard.val()))) {
                reminder.empty()
                    .append(" <span class='glyphicon glyphicon-ok text-success pull-left'></span>");
                return true;

            } else {
                reminder.empty()
                    .append("  <span class='glyphicon glyphicon-remove text-danger pull-left'></span>");
                return false;

            }
        }

        idcard.blur(idValidator);
        idcard.blur(function () {
            remove();
        });

        //判断姓名为2至4个汉字组成
        var name = $(".s-name");

        function nameValidator() {
            var reminder1 = $(".s-name-reminder");
            var lenth = name.val();
            if (lenth.trim().length < 5 && lenth.trim().length > 1) {
                reminder1.empty()
                    .append(" <span class='glyphicon glyphicon-ok text-success pull-left'></span>")
                return true;

            } else {
                reminder1.empty()
                    .append(" <span class='glyphicon glyphicon-remove text-danger pull-left'></span>")
                return false;


            }
        }

        name.blur(nameValidator);
        name.blur(function () {
            remove();
        });
        //判断联系电话
        var phone = $("#phone");
        var myreg2 = /^[1][0-9]{10}$/;
        var reminder2 = $(".s-phone-reminder");

        function phoneValidator() {

            if (myreg2.test($.trim(phone.val()))) {
                reminder2.empty()
                    .append(" <span class='glyphicon glyphicon-ok text-success pull-left'></span>");
                return true;

            } else {
                reminder2.empty()
                    .append("  <span class='glyphicon glyphicon-remove text-danger pull-left'></span>");
                return false;

            }
        }

        phone.blur(phoneValidator);
        phone.blur(function () {
            remove();
        });

        //判断密码是否由数字、字符特殊数字中任意两种组成
        var password = $(".s-password");
        var myreg3 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
        var reminder3 = $(".s-password-reminder");


        function pwdValidator() {
            if (myreg3.test($.trim(password.val()))) {
                reminder3.empty()
                    .append(" <span class='glyphicon glyphicon-ok text-success pull-left'></span>");
                return true;

            } else {
                reminder3.empty()
                    .append("  <span class='glyphicon glyphicon-remove text-danger pull-left'></span>");
                return false;

            }
        }

        password.blur(pwdValidator);
        password.blur(function () {
            remove();
        });
        //判断确认密码是否与密码一致
        var re_password = $(".s-re-password");
        var reminder4 = $(".s-re-password-reminder");

        function repasswordValidator() {

            if ($.trim(re_password.val()) == $.trim($(".s-password").val())) {
                reminder4.empty()
                    .append(" <span>密码一致</span>.")
                    .css("color", "green");
                return true;
            } else {
                reminder4.empty()
                    .append(" <span>密码不一致</span>.")
                    .css("color", "red");
                return false;
            }
        }

        re_password.blur(repasswordValidator);
        re_password.blur(function () {
            remove();
        });


    }
);

