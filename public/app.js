require.config({
    paths: {
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'editView': 'views/edit_view',
        'indexView':'views/index_view',
        'listView':'views/list_view',
        'card': "models/card",
        'cards':"models/cards",
        'router':"router",
        'indexController':'controllers/index_controller',
        'editController':'controllers/edit_controller',
        'newController':'controllers/new_controller',
        'listController':'controllers/list_controller'
    }
})

require(['backbone','router'],function(B,router){
    ////启动backbone的路由历史记录
    B.history.start();

})