UserModel = Backbone.Model.extend({
    defaults: {
        name: "Vicky"
    }
});

UserCollection = Backbone.Collection.extend({
    model: UserModel
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
    console.log("The userRow size is " + userRow.size());
    displayCollectionContents("Elements:", userRow);

    var jony    = new UserModel({name: "Jony", id: 1});
    var userRow = new UserCollection([jony]);
    console.log("The userRow size is " + userRow.size());
    displayCollectionContents("Elements:", userRow);
});

function displayCollectionContents(string, collection){
    console.log(string + " " + JSON.stringify(collection.toJSON()));
};