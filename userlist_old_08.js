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
    }
});

$(document).ready(function(){
    /*
    var user    = new UserModel();
    var userRow = new UserCollection([user]);
    displayCollectionContents("Default:", userRow);
    //var userView = new UserView({model: userRow});

    var user1   = new UserModel({name: "Jony", id: 1});
    var user2   = new UserModel({name: "Greg", id: 2});
    var userRow = new UserCollection([user1, user2]);
    displayCollectionContents("Hardcoded:", userRow);
    //var userView = new UserView({model: userRow});

    */
    var user = new UserModel();
    var userRow = new UserCollection([user]);
    userRow.fetch().then(function () {
        displayCollectionContents("Fetch:", userRow);
        var userView = new UserView({model: userRow});
    });    
});

function displayCollectionContents(string, collection){
    console.log("Size=>" + collection.size() + " " + string + " " + JSON.stringify(collection.toJSON()));
};