App = Em.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});



App.Router.map(function () {
    this.resource('profiles');
    this.resource('profile', { path: '/profile/:profile_id' });
});



/*Ember.Handlebars.helper('markdown', function(value) {
   var converter = new Showdown.converter();
    return new Handlebars.SafeString(converter.makeHtml(value));
});*/
