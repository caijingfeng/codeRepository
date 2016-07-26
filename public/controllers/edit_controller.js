require.config({
    paths: {
        'jquery': '../libs/jquery',
        'underscore': '../libs/underscore',
        'backbone': '../libs/backbone',
        'localstorage': '../libs/backbone.localStorage',
        'editView': '../views/edit_view',
        'card': "../models/card"
    }
})

require(['editView', 'card'], function (View, Model) {

    /////当我们的model中
    //id不存在的时候表示是新增 向服务器端做post提交
    //id存在的时候表示是修改 向服务器端做put提交
    var m = new Model({id:"5795de1e21583bf006702b66"})
    m.fetch();
    //m.fetch({ data: { id: "5795de1e21583bf006702b66" } })

    m.on('change', function () {
        var view = new View({ model: m })
    })



})