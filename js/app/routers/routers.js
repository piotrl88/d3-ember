App.ProfilesRoute = Ember.Route.extend({
    model: function () {
        return App.Hero.all();
    }
});

App.ProfileRoute = Ember.Route.extend({
    model: function(params) {
        return App.Profile.all(params.profile_id);
    },

    serialize: function(model) {
        return {
            profile_id: model.id
        };
    }
});
