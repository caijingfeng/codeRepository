define(['card','editView'],function(Model,View){
    var Controller = {
        init: function () {
            var m = new Model()
            new View({model:m})
        }
    }

    return Controller;
})