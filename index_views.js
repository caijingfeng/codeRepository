define(['jquery', 'backbone','text!tplDetail','template'], function ($, B,tpl,template) {
    ////创建一个backbone的view方法
    var View = B.View.extend({
        ///视图绑定到的html节点
        el: $('body'),
        ///此处使用underscore的模板引擎
        ///初始化时候调用的方法
        ///获取页面中的id='indexView'节点中的html的值
        // template:_.template($('#indexView').html()),
        // template:_.template(tpl),

        ///使用art-template模板引擎初始化模板
        template:template.compile(tpl),
        initialize: function () {
            console.log('index view initialize ....')
            this.render()   ///初始化的时候选人视图
        },
        render: function () {
            ////this.template()   返回模板中的节点的字符串
            // console.log(this.template())
            this.$el.html(this.template(this.model.toJSON()))
            // this.$el.html(this.template())
            // ///渲染视图的内容
            // this.$el.find('h1').html(this.model.get('name') +
            //     '<small>' +
            //     this.model.get('title') +
            //     '</small>')
            // ///选择视图中的标签元素进行赋值
            // this.$('.addr').html(this.model.get('address'))
            // this.$('.Tel').html(this.model.get('mobile'))
            // this.$('.qq').html(this.model.get('qq'))
            // this.$('.email').html(this.model.get('email'))
            // this.$('aside p').html(this.model.get('desc'))
        }
    })
    return View
})