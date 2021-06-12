Date.prototype.format = function(fmt) {
    let date = this;
    let ret;
    const opt = {
        "y+": date.getFullYear().toString(), // 年
        "M+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "m+": date.getMinutes().toString(), // 分
        "s+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return decodeURI(pair[1]);
        }
    }
    return undefined;
}
//获取滚动条当前位置
function getScrollTop() {
    let scrollTop = document.documentElement.scrollTop;
    return scrollTop;
}
//获取可视范围高度
function getClientHeight() {
    let clienHeight = document.documentElement.clientHeight;
    return clienHeight;
}
//获取文档完整高度
function getScrollHeight() {
    let scrollHeight = document.documentElement.scrollHeight;
    return scrollHeight;
}

function isScroll(){
    let offset = 10;
    return getScrollTop() + getClientHeight() + offset >= getScrollHeight();
}
