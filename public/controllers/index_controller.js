define(['card', 'indexView'], function (Model, View) {

    var Controller = {
        init: function (id) {
            var m = new Model({ id: id })
            m.fetch() /////此操作是异步的
            //m ////此处m值是空
            m.on('change', function () {
                console.log('--触发change事件后输出----')
                console.log(m.get('name'))
                new View({ model: m })
            })
            console.log('---直接输出m的值---')
            console.log(m.get('name'))
        }
    }

    return Controller;

})