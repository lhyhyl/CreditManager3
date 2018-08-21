$(document).ready(function () {
    var $course_name = $(".course_name");
    var $credit = $(".credit");
    // alert($credit);
    $course_name.blur(function () {
        if ($course_name.val() != null && $course_name.val() != "") {
            if ($credit.find("option:selected").text() != null && $credit.find("option:selected").text() != "" &&
                $credit.find("option:selected").text() != "请选择学分") {
                $(".form-control").removeAttr("disabled");
            }
        }
    });

    $credit.blur(function () {
        if ($course_name.val() != null && $course_name.val() != "") {
            if ($credit.find("option:selected").text() != null && $credit.find("option:selected").text() != ""&&
                $credit.find("option:selected").text() != "请选择学分") {
                $(".form-control").removeAttr("disabled");
            }
        }
    });
});