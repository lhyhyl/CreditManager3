//获取项目类型select元素,绑定onchange函数
var q_type = document.getElementById("q-select");
q_type.onchange = function () {
    //清空当前的option
    var q_subtype = document.getElementById("q-subtype");
    var opts = q_subtype.getElementsByTagName("option")
    for (var z = opts.length - 1; z > 0; z--) {
        q_subtype.removeChild(opts[z]);
    }
    //获取当前用户选择的类型名称
    var typeTxet = q_type.value;
    //创建对应的子类型列表
    var subtypes = [];
    switch (typeTxet) {
        case "大学生竞赛":
            subtypes = ["A类", "B类", "C类","校内竞赛","国际性比赛或活动",
                "全国性比赛或活动","省市级比赛或活动","校级比赛或活动","在校级以上体育竞赛中破纪录"];
            break;
        case "论文发表":
            subtypes = ["中文核心期刊及以上", "一般刊物(科技核心)", "其他一般刊物(第二篇开始，只认定1学分)",
                "专著、教材的第一作者", "专著、教材的独立作者","其余省级以上","其余省级以下"];
            break;
        case "社会实践":
            subtypes = ["国家级奖励", "省级一等奖","市级一等奖","院级奖励","向学院提交较高水平的调研报告"];
            break;
        case "科技成果/发明创造":
            subtypes = ["主要参与者(获省市部级以上奖)", "主要参与者(发明专利、软件著作权)"];
            break;
        case "参加学校组织的辅修专业(第二专业)、成人“专套本”等学习":
            subtypes =["报名、缴费并完成相关课程的学习"];
            break;
        case "参加创业实践活动或自主创业并取得一定成效":
            subtypes =["实体经营实践","网店经营实践"];

            break;
        case "职业资格考试":
            subtypes =["专业技术人员职业资格","技能人员职业资格","汽车驾驶证"];

            break;
        case "通过更高难度的单科水平考试":
            subtypes =["英语专业本科学生通过专业英语八级统测","英语专业专科学生通过专业英语四级统测"
                ,"艺术学门类学生通过全国大学外语四级考试","非外语专业、非艺术学门类学生通过全国大学外语四级考试","非外语专业学生通过全国大学外语六级考试"
                ,"雅思考试5.5至6分，托福75至85分","雅思考试6.5或以上，托福85分以上","非计算机类学生通过全国计算机等级考试二、三级","非计算机类学生通过全国计算机等级考试四级"];

            break;
        case "其他校方认可的课外实践活动或成绩":
            subtypes =["所在系、教务处审核通过"];

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
        q_subtype.appendChild(option);
    }
}

//获取子项目类型select元素,绑定onchange函数
var q_type2 = document.getElementById("q-subtype");
q_type2.onchange = function () {
    //清空当前的option
    var q_level = document.getElementById("q-level");
    var opts = q_level.getElementsByTagName("option")
    for (var z = opts.length - 1; z > 0; z--) {
        q_level.removeChild(opts[z]);
    }
    //获取当前用户选择的类型名称
    var typeTxet2 = q_type2.value;
    //创建对应的子类型列表
    var levels = [];
    switch (typeTxet2) {
        case "A类":
            levels = ["团体最高奖/8", "团体次高奖/5", "团体第三档奖/4","个人最高奖/6", "个人次高奖/4", "个人第三档奖/3","集中培训1学分/4天"];
            break;
        case "B类":
            levels = ["团体最高奖/6", "团体次高奖/4", "团体第三档奖/3","集中培训1学分/4天"];
            break;
        case "C类":
            levels = ["集中培训团体最高奖/2-3", "集中培训个人最高奖/1.5-2","集中培训团体未获奖/1-1.5"
                ,"集中培训个人未获奖/0.5-1","无培训未获奖/0.5-1"];
            break;
        case "校内竞赛":
            levels = ["全校性竞赛最高奖项/1","全校性竞赛次高奖项，跨系或系内竞赛最高奖项/0.5"];
            break;
        case "国际性比赛或活动":
            levels = ["最高奖项/8","次高奖项/6","第三档奖项/4"];
            break;
        case "全国性比赛或活动":
            levels = ["最高奖项/6","次高奖项/4","第三档奖项/3"];
            break;
        case "省市级比赛或活动":
            levels = ["最高奖项/3-5","次高奖项/2-3","第三档奖项/1-1.5"];
            break;
        case "校级比赛或活动":
            levels = ["最高奖项/1","次高奖项/0.5"];
            break;
        case "在校级以上体育竞赛中破纪录":
            levels = ["破全国高校记录或更高水平记录/6-8","破省高校记录/4","参加成都理工大学本部运动会并破校本部记录/2"
            ,"破学校记录/1"];
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
        case "其余省级以上":
            levels = ["1学分/300字"];

            break;

        case "其余省级以下":
            levels = ["1学分/400字"];

            break;
        case "主要参与者(获省市部级以上奖)":
            levels = ["一等奖/10","二等奖/6-8","三等奖/3-5"];

            break;
        case "主要参与者(发明专利、软件著作权)":
            levels = ["获得授权发明专利/8-10","成功申请发明专利/6-9","获得授权实用新型专利/5-6","成功申请实用新型专利/3-5",
                "获得计算机软件著作权/5-7"];
            break;
        case "国家级奖励":
            levels = ["最高奖项/6","次高奖项/4-5","第三档奖项/3"];

            break;
        case "省级一等奖":
            levels = ["最高奖项/4","次高奖项/3","第三档奖项及其之后/2"];
            break;
        case "市级一等奖":
            levels = ["最高奖项/3","次高奖项/2","第三档奖项及其之后/1"];
            break;
        case "院级奖励":
            levels = ["最高奖项/1.5","次高奖项/1"];
            break;
        case "向学院提交较高水平的调研报告":
            levels = ["1-2"];
            break;
        case "报名、缴费并完成相关课程的学习":
            levels = ["课程考核合格(1学分/32课时)"];
            break;

        case "实体经营实践":
            levels = ["有工商部门颁发的正式营业执照，并能提供项目的经营地点及场地租赁合同，且注册资金10万以上/3",
                "有工商部门颁发的正式营业执照，并能提供项目的经营地点及场地租赁合同/1-2"];

            break;
        case "网店经营实践":
            levels = ["网店等级3❤至5❤/1","1钻至2钻/1.5","3钻以上/2-3"];

            break;
        case "专业技术人员职业资格":
            levels = ["不分等级的准入类职业资格考试/5-10","初级/4","中级/6","高级/8","水平评价类职业资格初级/4",
                "水平评价类职业资格中级/6","水平评价类职业资格高级/8"];

            break;
        case "技能人员职业资格":
            levels = ["三级(即高级技能)/3","四级(即中级技能)/2","五级(即初级技能)/1"];

            break;
        case "汽车驾驶证":
            levels = ["小型、中型汽车驾驶证/3","大型汽车、特种车辆驾驶证/4-5"];

            break;
        case "英语专业本科学生通过专业英语八级统测":
            levels = ["2"];

            break;
        case "英语专业专科学生通过专业英语四级统测":
            levels = ["2"];

            break;
        case "艺术学门类学生通过全国大学外语四级考试":
            levels = ["2"];

            break;
        case "非外语专业、非艺术学门类学生通过全国大学外语四级考试":
            levels = ["1.5"];

            break;
        case "非外语专业学生通过全国大学外语六级考试":
            levels = ["2.5"];

            break;
        case "雅思考试5.5至6分，托福75至85分":
            levels = ["2"];

            break;
        case "雅思考试6.5或以上，托福85分以上":
            levels = ["3"];

            break;
        case "非计算机类学生通过全国计算机等级考试二、三级":
            levels = ["1"];

            break;
        case "非计算机类学生通过全国计算机等级考试四级":
            levels = ["2.5"];
            break;
        case "所在系、教务处审核通过":
            levels = ["1","2","3","4","5","6","7","8","9","10",];

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
        q_level.appendChild(option);
    }

}