define(['jquery','backbone'],function($,B){
    /////创建一个backbone的view视图
    var View = B.View.extend({
        /////视图绑定到的html节点
        el:$('body'),
        ////此处使用underscore的模板引擎
        /////获取页面中的id="indexView"节点中的html数据
        template:_.template($('#listView').html()),
        //////初始化时候调用的方法
        initialize:function(){
            console.log('list view initialized ... ');
            this.render();////初始化的时候渲染视图
        },
        render:function(){
            /////处理传递过来的数据 为标准的json数据
            var arr = this.model.map(function(item){
                return item.toJSON();
            })
            this.$el.html(this.template({model:arr}))
        }
    })

    return View;
})