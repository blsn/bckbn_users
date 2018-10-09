UserModel = Backbone.Model.extend({
    defaults: {
        name: "Dafna"
    }
});

UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: './api/users.php'
});

$(document).ready(function(){
    var user = new UserModel();
    var userRow = new UserCollection([user]);
    userRow.fetch().then(function () {
        displayCollectionContents("Fetch:", userRow);
    });
});

function displayCollectionContents(string, collection){
    console.log("Size=>" + collection.size() + " " + string + " " + JSON.stringify(collection.toJSON()));
};