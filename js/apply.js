//获取项目类型select元素,绑定onchange函数
var type = document.getElementById("f-select");
type.onchange = function () {
    //清空当前的option
    var subtype = document.getElementById("subtype");
    var opts = subtype.getElementsByTagName("option")
    for (var z = opts.length - 1; z > 0; z--) {
        subtype.removeChild(opts[z]);
    }
    //获取当前用户选择的类型名称
    var typeTxet = type.value;
    //创建对应的子类型列表
    var subtypes = [];
    switch (typeTxet) {
        case "大学生竞赛":
            subtypes = ["A类", "B类", "C类"];
            break;
        case "论文发表":
            subtypes = ["中文核心期刊及以上", "一般刊物(科技核心)", "其他一般刊物(第二篇开始，只认定1学分)",
                "专著、教材的第一作者", "专著、教材的独立作者"];
            break;
        case "科技成果/发明创造":
            subtypes = ["主要参与者(获省市部级以上奖)", "主要参与者(发明专利、软件著作权)"];
            break;
        case "科技立项项目/科研项目":
            subtypes = ["纵向课题", "较高水平的横向科研项目"];
            break;
        case "大学生创新创业计划项目":
            subtypes = ["国家级", "省级"];

            break;
        case "职业资格考试":
            subtypes = ["专业技术人员职业资格", "技能人员职业资格"];

            break;
        case "考取统招硕士研究生":
            subtypes = ["初试成绩合格", "正式录取"];

            break;
        case "毕业论文校级优秀":
            subtypes = ["经学校公布"];

            break;
        case "通过更高难度的单科水平考试":
            subtypes = ["英语专业本科学生通过专业英语四级统测", "英语专业专科学生通过专业英语四级统测", "英语专业本科学生通过专业英语八级级统测"
                , "艺术学门类学生通过全国大学外语四级考试", "非外语专业、非艺术学门类学生通过全国大学外语四级考试", "非外语专业学生通过全国大学外语六级考试"
                , "雅思考试5.5至6分，托福75至85分", "雅思考试6.5或以上，托福85分以上", "非计算机类学生通过全国计算机等级考试二、三级", "非计算机类学生通过全国计算机等级考试四级"];

            break;
        case "其他校方认可的优秀表现":
            subtypes = ["所在系、教务处审核通过"];

            break;

    }
    //遍历城市列表
    for (var i = 0; i < subtypes.length; i++) {
        //创建option元素
        var option = document.createElement("option");
        //将子类型添加到<option>上
        var textNode = document.createTextNode(subtypes[i]);
        option.appendChild(textNode);
        //将option添加到subtype
        subtype.appendChild(option);
    }
}

//获取子项目类型select元素,绑定onchange函数
var type2 = document.getElementById("subtype");
type2.onchange = function () {
    //清空当前的option
    var level = document.getElementById("level");
    var opts = level.getElementsByTagName("option")
    for (var z = opts.length - 1; z > 0; z--) {
        level.removeChild(opts[z]);
    }
    //获取当前用户选择的类型名称
    var typeTxet2 = type2.value;
    //创建对应的子类型列表
    var levels = [];
    switch (typeTxet2) {
        case "A类":
            levels = ["团体最高奖/6", "团体次高奖/4.5", "团体第三档奖/3", "个人最高奖/4", "个人次高奖/2", "个人第三档奖/1"];
            break;
        case "B类":
            levels = ["团体最高奖/4.5", "团体次高奖/3", "团体第三档奖/1.5", "个人最高奖/2", "个人次高奖/1"];
            break;
        case "C类":
            levels = ["团体最高奖/2", "团体次高奖/1", "个人最高奖/1"];
            break;
        case "中文核心期刊及以上":
            levels = ["4-10"];
            break;
        case "一般刊物(科技核心)":
            levels = ["3"];
            break;
        case "其他一般刊物(第二篇开始，只认定1学分":
            levels = ["2"];

            break;
        case "专著、教材的独立作者":
            levels = ["6-10"];

            break;
        case "专著、教材的第一作者":
            levels = ["4-8"];

            break;
        case "主要参与者(获省市部级以上奖)":
            levels = ["一等奖/6-10", "二等奖/5-8", "三等奖/2-4"];

            break;
        case "主要参与者(发明专利、软件著作权)":
            levels = ["获得授权发明专利/8-10", "成功申请发明专利/6-8", "获得授权实用新型专利/4-5", "成功申请实用新型专利/2-4",
                "获得计算机软件著作权/4-6"];
            break;
        case "纵向课题":
            levels = ["省级以上/6-10", "市级以上/2-5"];
            break;
        case "较高水平的横向科研项目":
            levels = ["课题经费3万以上/4-8", "课题经费5千至3万/2-4"];

            break;
        case "国家级":
            levels = ["4-5"];

            break;
        case "省级":
            levels = ["2-3"];

            break;
        case "专业技术人员职业资格":
            levels = ["不分等级的准入类职业资格考试/4-10", "初级/2", "中级/3-4", "高级/6-8", "水平评价类职业资格初级/2",
                "水平评价类职业资格中级/3-4", "水平评价类职业资格高级/6-8"];

            break;
        case "技能人员职业资格":
            levels = ["仅限三级即高级技能职业资格/2"];

            break;
        case "初试成绩合格":
            levels = ["4"];

            break;
        case "正式录取":
            levels = ["6"];

            break;
        case "经学校公布":
            levels = ["3"];

            break;
        case "英语专业本科学生通过专业英语四级统测":
            levels = ["2.5"];

            break;
        case "英语专业专科学生通过专业英语四级统测":
            levels = ["4"];

            break;
        case "英语专业本科学生通过专业英语八级级统测":
            levels = ["4"];

            break;
        case "艺术学门类学生通过全国大学外语四级考试":
            levels = ["3"];

            break;
        case "非外语专业、非艺术学门类学生通过全国大学外语四级考试":
            levels = ["2.5"];

            break;
        case "非外语专业学生通过全国大学外语六级考试":
            levels = ["4"];

            break;
        case "雅思考试5.5至6分，托福75至85分":
            levels = ["3"];

            break;
        case "雅思考试6.5或以上，托福85分以上":
            levels = ["5"];

            break;
        case "非计算机类学生通过全国计算机等级考试二、三级":
            levels = ["2"];

            break;
        case "非计算机类学生通过全国计算机等级考试四级":
            levels = ["4"];
            break;
        case "所在系、教务处审核通过":
            levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",];

            break;


    }
    //遍历城市列表
    for (var i = 0; i < levels.length; i++) {
        //创建option元素
        var option = document.createElement("option");
        //将子类型添加到<option>上
        var textNode = document.createTextNode(levels[i]);
        option.appendChild(textNode);
        //将option添加到subtype
        level.appendChild(option);
    }

}