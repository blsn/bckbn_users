UserModel = Backbone.Model.extend({
    defaults: {
        name: "Dafna"
    }
});

UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: './api/users.php'
});

UserView = Backbone.View.extend({
    model: {},
    initialize: function(){
        this.render();
    },
    render: function(){
        console.log("users " + JSON.stringify(this.model.toJSON()));
        //console.log(this.model.toJSON());
        //console.log(this.model.toJSON()[0].name + " " + this.model.toJSON()[1].name);
    },
    /*
    el: '#users',
    template: _.template($("#userTemplate").html()),
    initialize: function(){
        this.render();
    },   
    render: function() {
        //console.log(this.model.toJSON());
        var obj = this.model.toJSON();
        console.log(obj);
        var myJSON = JSON.stringify(obj);
        console.log(myJSON);
        myJSON = myJSON.replace(/[\[\]']+/g,'');        
        console.log(myJSON);
        
        //console.log(this.model.toJSON());
        //var obj = this.model.toJSON();
        
        //var myJSON = JSON.stringify(obj);
        //console.log(myJSON);

        //this.$el.html(this.template(this.model.toJSON()));
        this.$el.html(this.template(myJSON));
    }
    */
    /*    
    el: '#users',
    initialize: function(){
        this.render();
    },
    render: function(){
        console.log(this.model.toJSON());
        user = this.model.toJSON();
        user_name = user[0].name;
        var template = _.template($("#userTemplate").html(), {});
        var templateVars = {name :user_name};
        this.$el.html(template(templateVars));
        //this.$el.html(template);
    }
    */
});

$(document).ready(function(){
    /*
    var user    = new UserModel();
    var users = new UserCollection([user]);
    var userView = new UserView({model: users});
    displayCollectionContents("Default:", users);
    */

    var user1   = new UserModel({name: "Jony", id: 1});
    var user2   = new UserModel({name: "Greg", id: 2});
    var users   = new UserCollection([user1, user2]);
    var userView = new UserView({model: users});
    //displayCollectionContents("Hardcoded:", users);

    /*
    var user = new UserModel();
    var users = new UserCollection([users]);
    users.fetch().then(function () {
        var userView = new UserView({model: users});
        //displayCollectionContents("Fetch:", users);
    });
    */
});

function displayCollectionContents(string, collection){
    console.log("Size=>" + collection.size() + " " + string + " " + JSON.stringify(collection.toJSON()));
};