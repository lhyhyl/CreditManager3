

var $trList = $("tbody").children("tr");
for (var i = 0; i < $trList.length; i++) {
    var $tdArr = $trList.eq(i).find("td");
    for (var j = 0; j < $tdArr.length; j++) {
        var $td_text = $tdArr.eq(j).text();
        $tdArr.eq(j).attr("title", $td_text);
    }
}

