/*网页内搜索帖子*/
let page;
let search_func = new Vue({
	el: "#search",
	data: {
		s_msg: "",
		searchTips: [{
			id: 0,
			content: "未获取到数据，请检查网络是否正常"
		}]
	}
	methods: {
		getSearchTips: function() {
			if (page == undefined) {
				page = 1;
			}
			keyWordSearch(page, s_msg, function(data) {
				let errorTips = {
					id: 0,
					content: ""
				}
				if (data.code != 200) {
					/* 获取失败*/
					// alert(data.msg);
					errorTips.content = "获取失败，请检查网络设置";
					search_func.searchTips.push(errorTips);
					return;
				} else if (data.data.length == 0) {
					/* 数据为空*/
					errorTips.content = "未获取到数据";
					search_func.searchTips.push(errorTips);
					return;
				}
				
				searchtips = data.data;
				for (var i=0; i < searchtips.length; i++) {
					this.searchTips.push(searchtips[i]);
				}
				//隐藏分类栏
				document.querySelector("#category_label").style.display = "none";
				//清空当前帖子内容
				let size = tips_content.tips_data.length;
				tips_content.tips_data.splice(0, size);
				//获取搜索帖子内容
				concatTipsArray(tips_content.tips_data, this.searchTips);
			})
			page++;
		}
	}
})
