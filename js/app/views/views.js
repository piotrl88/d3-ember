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

