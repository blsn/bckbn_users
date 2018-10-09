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
    defaults: {},
    initialize: function(){
        //alert("I'm exist now");
        this.$el.append("I'm exist now");
    }
});

/*
UserList = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        var template = _.template($("#userTemplate").html(), {});
        //this.$el.html(template);
        var templateVars = {user_name :'Jony'};
        this.$el.html(template(templateVars));
    }
});
*/

$(document).ready(function(){
    //var userRow = new UserList({el: $("#users")});

    //var userRow = new UserModel();
    //var userRow = new UserModel({name: "Tony"});
    //alert("The name is " + userRow.get("name"));

    var user    = new UserModel();
    var userRow = new UserCollection([user]);
    console.log("The size:" + userRow.size());
    displayCollectionContents("Default:", userRow);

    var user1   = new UserModel({name: "Jony", id: 1});
    var user2   = new UserModel({name: "Greg", id: 2});
    var userRow = new UserCollection([user1, user2]);
    displayCollectionContents("Hardcoded:", userRow);

    var user = new UserModel();
    var userRow = new UserCollection([user]);
    userRow.fetch().then(function () {
        displayCollectionContents("Fetch:", userRow);
        //var userView = new UserView();
        var userView = new UserView({el: $("#users")});
    });
});

function displayCollectionContents(string, collection){
    console.log("Size=>" + collection.size() + " " + string + " " + JSON.stringify(collection.toJSON()));
};