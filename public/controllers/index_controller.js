/////requirejs的配置部分
require.config({
    paths: {
        //////'文件使用时候的名字':'文件路径'
        'jquery': '../libs/jquery',
        'underscore': '../libs/underscore',
        'backbone': '../libs/backbone',
        'localstorage': '../libs/backbone.localStorage',
        'indexView': '../views/index_view',
        'card': "../models/card"
    }
})

///require([模块名字,模块名字2],function(在方法中使用时的名字,在方法中使用时的名字){})
require(['indexView', 'card','backbone'], function (View, Model,B) {

    /////新创建一个model id值为me
    var m = new Model({id:"5795de1e21583bf006702b66"})

    /////读取数据
    ///data是一个我做请求是指定的参数 会拼接在url参数中用? &方式拼接
    /////card?id=....
    // m.fetch({ data: { id: "5795de1e21583bf006702b66" } })

    ///// 地址为 /card/id
    m.fetch()

    m.on('change',function(){
        //////新创建一个视图 传递一个模型数据进去
        var view = new View({ model: m })
    })

    

})
