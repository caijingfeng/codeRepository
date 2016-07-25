/////requirejs的配置部分
require.config({
    paths:{
        //////'文件使用时候的名字':'文件路径'
        'jquery':'../libs/jquery',
        'underscore':'../libs/underscore',
        'backbone':'../libs/backbone',
        'localstorage':'../libs/backbone.localStorage',
        'indexView':'../views/index_view',
        'card':"../models/card"
    }
})

///require([模块名字,模块名字2],function(在方法中使用时的名字,在方法中使用时的名字){})
require(['indexView','card'],function(View,Model){
    /////新创建一个model id值为me
    var m = new Model({id:"me"})

    /////读取数据
    m.fetch()

    //////新创建一个视图 传递一个模型数据进去
    var view = new View({model:m})

})
