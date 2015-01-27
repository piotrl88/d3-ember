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
    },
    redirect: function() {
        this.transitionTo('profile.basic');
    }
});

App.ProfileBasicRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('profile');
    }
});

App.ProfileAdvanceRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('profile');
    }
});

App.ProfileSkillsRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('profile');
    }
});

App.ProfileEquipmentRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('profile');
    }
});



