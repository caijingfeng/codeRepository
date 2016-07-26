define(['backbone','card'],function(B,Model){
    var Collection = B.Collection.extend({
        model:Model,
        url:'/card',
        parse:function(res){
            console.log(res)
            this.set(res.data)
            //this.trigger('change')
            return res.data
        }
    })
    return Collection;

})