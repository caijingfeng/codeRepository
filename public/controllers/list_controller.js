define(['cards','listView'], function (C,View) {
    var Controller = {
        init: function () {
            var c = new C();
            c.on('reset', function () {
                console.log(c.models);
                new View({model:c.models});
            })

            //////另一种取数据的方法 不需要监听事件
            // c.fetch().done(function(res){
            //     c.set(res.data)
            //     new View({model:c.models});
            // })

            ////设置reset为true才能触发collection的reset事件
            c.fetch({reset: true});
            
        }
    }
    return Controller;

})