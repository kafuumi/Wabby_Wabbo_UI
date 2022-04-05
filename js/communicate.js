/* 与后端通信 */
let host = "http://localhost:8080/Wabby_Wabbo";

/* 发布帖子
@param data: 发布的帖子数据
@param callBack: 回调函数 function(data){} data即为服务器返回的数据
postTips({}, function(data){
    console.log(data);
})              
 */
function postTips(data, callBack, errorCallBack) {
    let url = host + "/posttips";
    axios.post(url, data)
        .then(function(response) {
            callBack(response.data);
        })
        .catch(function(error) {
            if (errorCallBack != undefined) {
                errorCallBack(error)
            }
        });
}
/* 获取帖子 */
function getTips(type, page, callBack, errorCallBack) {
    let url = host + "/gettips";
    axios.get(url, {
            params: {
                type: type,
                page: page
            }
        })
        .then(function(response) {
            callBack(response.data);
        }).catch(function(error) {
            if (errorCallBack != undefined) {
                errorCallBack(error)
            }
        });
}
/* 根据id获取帖子 */
function getTipsById(id, callBack, errorCallBack) {
    let url = host + "/getdetail";
    axios.get(url, {
        params: {
            id: id
        }
    }).then(function(response) {
        callBack(response.data);
    }).catch(function(error) {
        if (errorCallBack != undefined) {
            errorCallBack(error)
        }
    });
}
/* 发布评论 */
function postComments(comments, callBack, errorCallBack) {
    let url = host + "/postcomments";
    axios.post(url, comments)
        .then(function(response) {
            callBack(response.data);
        })
        .catch(function(error) {
            if (errorCallBack != undefined) {
                errorCallBack(error)
            }
        });

}
/* 获取评论 */
function getComments(tipsId, page, callBack, errorCallBack) {
    let url = host + "/getcomments";
    axios.get(url, {
            params: {
                tid: tipsId,
                page: page
            }
        })
        .then(function(response) {
            callBack(response.data);
        }).catch(function(error) {
            if (errorCallBack != undefined) {
                errorCallBack(error)
            }
        });
}
/* 获取热贴 */
function getHotTips(callBack, errorCallBack) {
    let url = host + "/gethottips";
    axios.get(url)
        .then(function(response) {
            callBack(response.data);
        }).catch(function(error) {
            if (errorCallBack != undefined) {
                errorCallBack(error)
            }
        });
}
/* 获取热评 */
function getHotComments(tipsId, callBack, errorCallBack) {
    let url = host + "/gethotcomments";
    axios.get(url, {
            params: {
                tid: tipsId
            }
        })
        .then(function(response) {
            callBack(response.data);
        }).catch(function(error) {
            if (errorCallBack != undefined) {
                errorCallBack(error)
            }
        });
}
/* 加热帖子 */
function addTipsStarNum(id, addNum, errorCallBack) {
    let url = host + "/addtipsstarnum";
    addStarNum(url, id, addNum,errorCallBack)
}

/* 加热评论 */
function addCommentsStarNum(id, addNum, errorCallBack) {
    let url = host + "/addcommentsstarnum";
    addStarNum(url, id, addNum,errorCallBack);
}

function addStarNum(url, id, addNum, errorCallBack) {
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
        }).catch(function(error) {
            if (errorCallBack != undefined) {
                errorCallBack(error)
            }
        });
}
/*搜索帖子*/
function keyWordSearch(strMsg, page, callBack, errorCallBack) {
    let url = host + "/searchtips";
    axios.get(url, {
            params: {
                content: strMsg,
                page: page
            }
        })
        .then(function(response) {
            callBack(response.data);
        }).catch(function(error) {
            if (errorCallBack != undefined) {
                errorCallBack(error)
            }
        });
}
/* 获取对应type下帖子的总页数 */
function getPageNum(type, callBack){
    let url = host + "/getpagenum";
    if(type == undefined){
        type = "情感";
    }
    axios.get(url, {
        params:{
            type: type
        }
    }).then(function(response){
        callBack(response.data);
    })
}
