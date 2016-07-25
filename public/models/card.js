define(['backbone', 'localstorage'], function(B) {
    var Model = B.Model.extend({
        localStorage: new B.LocalStorage("card"),
        defaults: {
            name: "",
            title: "",
            address: "",
            phone: "",
            qq: "",
            email: "",
            description: ""
        },
        //////backbone的模型验证方法
        validate:function(attrs,options){
            console.log(attrs)
            if(attrs.name.trim().length<2){
                return {attr:"name",msg:"名字最小长度为2"}
            }
            if(!!!attrs.title.trim()){
                return {attr:"title",msg:"职位信息不能为空"}
            }
            //.....
        }
    })

    return Model
})
