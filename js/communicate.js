/* 与后端通信 */
let host = "http://39.107.39.204:8080/Wabby_Wabbo";
// let host = "http://localhost:8080/Wabby_Wabbo";

/* 发布帖子
@param data: 发布的帖子数据
@param callBack: 回调函数 function(data){} data即为服务器返回的数据
postTips({}, function(data){
    console.log(data);
})              
 */
function postTips(data, callBack) {
    let url = host + "/posttips";
    axios.post(url, data)
        .then(function(response) {
            callBack(response.data);
        })
        .catch(function(error) {
            alert("网络错误");
        });
}
/* 获取帖子 */
function getTips(type, page, callBack) {
    let url = host + "/gettips";
    axios.get(url, {
            params: {
                type: type,
                page: page
            }
        })
        .then(function(response) {
            callBack(response.data);
        });
}
/* 根据id获取帖子 */
function getTipsById(id, callBack) {
    let url = host + "/getdetail";
    axios.get(url, {
        params: {
            id: id
        }
    }).then(function(response) {
        callBack(response.data);
    });
}
/* 发布评论 */
function postComments(comments, callBack) {
    let url = host + "/postcomments";
    axios.post(url, comments)
        .then(function(response) {
            callBack(response.data);
        })
        .catch(function(error) {
            alert("网络错误");
        });

}
/* 获取评论 */
function getComments(tipsId, page, callBack) {
    let url = host + "/getcomments";
    axios.get(url, {
            params: {
                tid: tipsId,
                page: page
            }
        })
        .then(function(response) {
            callBack(response.data);
        });
}
/* 获取热贴 */
function getHotTips(callBack) {
    let url = host + "/gethottips";
    axios.get(url)
        .then(function(response) {
            callBack(response.data);
        });
}
/* 获取热评 */
function getHotComments(tipsId, callBack) {
    let url = host + "/gethotcomments";
    axios.get(url, {
            params: {
                tid: tipsId
            }
        })
        .then(function(response) {
            callBack(response.data);
        });
}
/* 加热帖子 */
function addTipsStarNum(id, addNum) {
    let url = host + "/addtipsstarnum";
    addStarNum(url, id, addNum)
}

/* 加热评论 */
function addCommentsStarNum(id, addNum) {
    let url = host + "/addcommentsstarnum";
    addStarNum(url, id, addNum);
}

function addStarNum(url, id, addNum) {
    if (addNum == undefined) {
        addNum = 1;
    }
    axios.get(url, {
            params: {
                id: id,
                addNum: addNum
            }
        })
        .then(function(response) {
            console.log(response.data)
        });
}
/*搜索帖子*/
function keyWordSearch(strMsg, page, callBack) {
    let url = host + "/searchtips";
    axios.get(url, {
            params: {
                content: strMsg,
                page: page
            }
        })
        .then(function(response) {
            callBack(response.data);
        })
}
