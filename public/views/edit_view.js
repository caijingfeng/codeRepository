define(['jquery', 'backbone'], function ($, B) {

    var View = B.View.extend({
        el: $("form"),
        initialize: function () {
            console.log('edit view initialized ...')
            this.render()
            /////监听model的验证事件 当模型数据改变的时候
            this.listenTo(this.model, 'invalid', this.validatedHandle)

            ////对模型添加change事件
            this.model.on('change', function () {
                window.location.href = 'index.html'
            })
        },
        render: function () {
            //////把this.model中的数据填写在表单内容中
            //this.$('input[name="name"]').val(this.model.get('name'))
            var temModel = this.model; /////把this.model暂存
            this.$('input[type="text"]').each(function () {
                /////此处的this表示当前遍历到的标签
                $(this).val(temModel.get($(this).attr('name')));
            })
            this.$('textarea').val(this.model.get('description'));
        },
        events: {
            // 'click #btnID':'submitHandle'
            'submit': 'submitHandle'
        },
        validatedHandle: function (model, error) {
            //console.log(model)
            //console.log(error)
            $('span').text('');
            this.$('span[for="' + error.attr + '"]').text(error.msg);
        },
        submitHandle: function (e) {
            //alert('submit')
            e.preventDefault()
            // this.model.set('name', this.$('input[name="name"]').val())
            // this.model.set('title', this.$('input[name="title"]').val())
            // this.$el.serialize(); /////////name=xx&title=xx&......
            var arr = this.$el.serializeArray(); /////////[{"name":"name","value":""},{"name":"title","value":""}...]
            /****
             * 
             * {name:"",title:"",phone:"",email...}
             * 
             * _.reduce()
             * 
             * var resultObj = {}
             * this.model.set(resultObj)
             */
            /////使用underscore的reduce方法 处理表单数据
            var data = _.reduce(arr, function (preVal, curVal) {
                preVal[curVal.name] = curVal.value
                return preVal
            }, {})
            this.model.set(data)
            console.log('-------------before save---------------')
            ////做判断 验证是否成功
            if (this.model.isValid()) {
                this.model.save()
            }
            else {
            }

        }
    })

    return View;
})