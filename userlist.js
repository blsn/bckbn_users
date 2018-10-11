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
    template: _.template(
        $('#userTemplate').html()
    ),
    initialize: function(){
        this.render();
    },
    render: function(){
        console.log(this.model.toJSON());
        console.log(JSON.stringify(this.model.toJSON()));

        this.$el.html(this.template(this.model.toJSON()));
        /*
        var template = _.template($("#userTemplate").html(), {});
        this.$el.html(template(this.model.toJSON()));
        */
        /*
        user = this.model.toJSON();
        user_name = user[0].name;
        var template = _.template($("#userTemplate").html(), {});
        var templateVars = {name :user_name};
        console.log(templateVars);
        this.$el.html(template(templateVars));
        */
    }
});


$(document).ready(function(){
    var user1    = new UserModel({name: "Jony", id: 1});
    var user2    = new UserModel({name: "Greg", id: 2});
    var users    = new UserCollection([user1, user2]);
    var userView = new UserView({model: users});
});
