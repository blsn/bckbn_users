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

$(document).ready(function(){
    var userRow = new UserList({el: $("#users")});
});
