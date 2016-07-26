define(['card', 'editView'], function (Model, View) {
    var Controller = {
        init: function (id) {
            var m = new Model({ id: id })
            m.fetch();
            m.on('change', function () {
                var view = new View({ model: m })
            })
        }
    }
    return Controller;
})