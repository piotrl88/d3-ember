App.IndexController = Ember.Controller.extend({
    init: function () {
        this.set('battleTag', localStorage.battleTag);
    },
    save: function (value) {
        localStorage.battleTag = value;
    }
});

App.ProfileController = Ember.Controller.extend({});



