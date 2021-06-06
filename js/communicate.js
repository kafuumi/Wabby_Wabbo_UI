/* 与后端通信 */
let host = "http://localhost:8080/Wabby_Wabbo/";
let tips_data = {
    id: 1,
    date: "2020-02-02 12:12:22",
    type: "知识",
    starNum: 7,
    content: "demofasdf"
};
let comments_data = {
    id: 1,
    content: "你好",
    starNum: 10,
    date: "2020-02-02 23:12:39",
    tips_id: 1
};
let response = {
    code: 200,
    msg: "ok",
    data: []
}
/* 发布帖子 */
function postTips(data) {
    let url = host + "/posttips";
    let r = {
        code: 200,
        msg: "ok"
    }
    return r;
}
/* 获取帖子 */
function getTips(type, page) {
    let url = host + "/gettips?type=&page=";
    let r = response;
    r.data = [];
    for (let i = 0; i < 12; i++) {
        r.data.push(tips_data)
        r.data[i].id = i + 1;
    }
    return r;
}
/* 根据id获取帖子 */
function getTipsById(id) {
    let url = host + "/getdetail?id=";
    let r = response;
    r.data = tips_data;
    r.data.id = id;
    return r;
}
/* 发布评论 */
function postComments(comments) {
    let url = host + "/postcomment";
    let r = {
        code: 200,
        msg: "ok"
    }
    return r;

}
/* 获取评论 */
function getComments(tipsId, page) {
    let url = host + "/getcomments?tid=&page=";
    let r = response;
    r.data = [];
    for(let i = 0; i < 10; i++){
        r.data.push(comments_data);
        r.data[i].id = i + 1;
    }
    return r;

}
/* 获取热贴 */
function getHotTips() {
    let url = host + "/gethottips";
    let r = response;
    r.data = [];
    for(let i = 0; i < 10; i++){
        r.data.push(comments_data);
        r.data[i].id = i + 1;
    }
    return r;
}
/* 获取热评 */
function getHotComments(tipsId) {
    let url = host + "/gethotcom?tid=";
    let r = response;
    r.data = [];
    for(let i = 0; i < 3; i++){
        r.data.push(comments_data);
        r.data[i].id = i + 1;
    }
    return r;
}