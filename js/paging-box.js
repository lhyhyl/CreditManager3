var setTotalCount = 301;
$('#box').paging({
    initPageNo: 3, // 初始页码
    totalPages: 30, //总页数
    totalCount: '合计' + setTotalCount + '条数据', // 条目总数
    slideSpeed: 600, // 缓动速度。单位毫秒
    jump: true, //是否支持跳转
    callback: function(page) { // 回调函数
        console.log(page);
    }
})