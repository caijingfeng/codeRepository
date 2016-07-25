require.config({
    paths:{
        'jquery':'../libs/jquery',
        'underscore':'../libs/underscore',
        'backbone':'../libs/backbone',
        'localstorage':'../libs/backbone.localStorage',
        'editView':'../views/edit_view',
        'card':"../models/card"
    }
})

require(['editView','card'],function(View,Model){

    var m = new Model({id:"me"})

    m.fetch()

    var view = new View({model:m})

})