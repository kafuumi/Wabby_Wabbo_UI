/* 换页控制
 html: <div class="page_control" id="page_control">
            <div class="page_item" v-bind:class="{page_item_disabled:hasLastPage}" v-on:click="switchPage(current-1)">
                &lt;上一页
            </div>
            <template v-for="(page,index) in pages">
                <div class="page_item" v-on:click="switchPage(index)"
                    v-bind:class="{page_item_current:index == current}">
                    {{page}}
                </div>
            </template>
            <div class="page_item" v-bind:class="{page_item_disabled:hasNextPage}"
                v-on:click="switchPage(current+1)">
                下一页&gt;
            </div>
        </div>
 */
let pageControl = new Vue({
    el: "#page_control",
    data: {
        maxPageNum: 1,
        pages: [1],
        current: 0
    },
    computed: {
        /* 是否还有上一页*/
        hasLastPage: function() {
            return this.pages[this.current] == 1;
        },
        /* 是否还有下一页*/
        hasNextPage: function() {
            return this.pages[this.current] == this.maxPageNum
        }
    },
    methods: {
        /**
         * 初始化page
         */
        initPage: function(type) {
            //获取到最大页数
            let max = 20;
            this.maxPageNum = max;
            //清空
            this.pages.splice(0, this.pages.length);
            this.current = 0;
            // 最多显示10个换页的格子
            let size = 10;
            //总页数比10还小
            if (max <= size) {
                size = max;
            }
            //开始顺序赋值
            for (let i = 0; i < size; i++) {
                this.pages.push(i + 1);
            }
        },
        switchPage: function(index) {
            // 数据的容量
            let pageSize = this.pages.length;
            //超出边界
            if (index < 0 || index == pageSize) {
                return;
            }
            // 本次点击仍为当前页，不作处理
            if (index == this.current) {
                return;
            }
            // 将current置为当前点击的位置
            // 如果没有发生移动，则page[current]为当前选择的页数
            this.current = index;
            loadTips(getCurrentType(), this.pages[index]);
            // console.log(this.currentPage);
            //|---左1/3---|---不移动---|---右1/3---|
            //点击位置为右侧1/3时，发生移动
            if (index > pageSize / 3 * 2) {
                //右侧最后一元素已达到最大值
                if (this.pages[pageSize - 1] != this.maxPageNum) {
                    //每个元素向右移动两个距离
                    for (let i = 0; i < pageSize; i++) {
                        this.pages[i] = this.pages[i] + 2;
                    }
                    //调整当前选择的页数的索引
                    this.current = index - 2;
                }
            } else if (index < pageSize / 3) {
                if (this.pages[0] != 1) {
                    for (let i = 0; i < pageSize; i++) {
                        this.pages[i] = this.pages[i] - 2;
                    }
                    this.current = index + 2;
                }
            }
            //page[current]即为当前选择的页数
            // console.log(this.pages[this.current]);
        }
    }
});
