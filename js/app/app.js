App = Em.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

App.IndexController = Ember.Controller.extend({
    init: function () {
        this.set('battleTag', localStorage.battleTag);
    },
    save: function (value) {
        localStorage.battleTag = value;
    }
});

App.Router.map(function () {
    this.resource('profiles');
    this.resource('profile', { path: '/profile/:profile_id' });
});

App.ProfilesRoute = Ember.Route.extend({
    model: function () {
        return App.Hero.all();
    }
});

App.ProfileController = Ember.Controller.extend({

});


App.Hero = Ember.Object.extend();
App.Hero.reopenClass({
    all: function () {
        var battleTag = localStorage.battleTag;
        return $.getJSON("http://eu.battle.net/api/d3/profile/" + battleTag + "/?callback=?").then(function (response) {
            var heroes = [];
            response.heroes.forEach(function (hero) {
                heroes.push(App.Hero.create(hero));
            });
            return heroes;
        });
    }
});


App.ProfileRoute = Ember.Route.extend({
    model: function(params) {
        // the server returns `{ id: 12 }`
        //console.log(params.profile_id);
        return App.Profile.all(params.profile_id);
    },

    serialize: function(model) {
        // this will make the URL `/posts/12`
        return { profile_id: model.id };
    }
    /*model: function () {
        return App.Profile.all();
    }*/
});


App.Profile = Ember.Object.extend();
App.Profile.reopenClass({
    all: function (profileId) {
        var battleTag = localStorage.battleTag;
        localStorage.profileId = profileId;
        return $.getJSON("http://eu.battle.net/api/d3/profile/" + battleTag + "/hero/"+profileId+"?callback=?").then(function (response) {
            var profile = response;

            console.log(profile);
            return profile;
        });
    }
});

/*Ember.Handlebars.helper('markdown', function(value) {
   var converter = new Showdown.converter();
    return new Handlebars.SafeString(converter.makeHtml(value));
});*/
