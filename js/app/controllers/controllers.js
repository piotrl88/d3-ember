App.IndexController = Ember.Controller.extend({
    init: function () {
        this.set('battleTag', localStorage.battleTag);
    },
    save: function (value) {
        localStorage.battleTag = value;
    }
});

App.ProfileController = Ember.Controller.extend({
    renderTemplate: function(){
        // Render in the named outlet using the right controller
        this.render('basic', {into: 'profile', outlet: 'basic', controller: 'basic'});
        this.render('advance', {into: 'profile', outlet: 'advance', controller: 'advance'});
        this.render('skills', {into: 'profile', outlet: 'skills', controller: 'skills'});
        this.render('equipment', {into: 'profile', outlet: 'equipment', controller: 'equipment'});
    },

    serialize: function(model) {
        return {
            basic: model,
            advance: model,
            skills: model,
            equipment: model
        };
    },

    setupController: function(controller, model) {
        // Setup each controller with its own model
        this.controllerFor('basic').set('model', model);
        this.controllerFor('advance').set('model', model);
        this.controllerFor('skills').set('model', model);
        this.controllerFor('equipment').set('model', model);
    }
});


App.ProfileBasicController = Ember.Controller.extend({
    needs: "profile"
});

App.ProfileAdvanceController = Ember.Controller.extend({
    needs: "profile"
});

App.ProfileSkillsController = Ember.Controller.extend({
    needs: "profile"
});
App.ProfileEquipmentController = Ember.Controller.extend({
    needs: "profile"
});
