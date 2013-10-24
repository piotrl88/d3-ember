App = Em.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    LOG_ACTIVE_GENERATION: true
});

App.Router.map(function () {
    this.resource('profiles');
    this.resource('profile', { path: '/profile/:profile_id' }, function() {
        this.route('basic');
        this.route('advance');
        this.route('skills');
        this.route('equipment');
    });
});

Ember.Handlebars.registerHelper("notEmptyResource", function(context) {
   var secondaryResource = context.contexts[0].content.stats.secondaryResource;
   if(secondaryResource != 0) {
       return "/ "+secondaryResource;
   }
});

Ember.Handlebars.registerBoundHelper('lastUpdated', function(value) {
    var newDate = new Date();
    newDate.setTime(value*1000);
    var dateString = newDate.toUTCString();

    return dateString;
});

Ember.Handlebars.registerBoundHelper("toPercent", function(value) {
    var percentValue = (value * 100).toString()
    var pos = percentValue.indexOf('.');
    return percentValue.substr(0, pos+4)+"%";
});

Ember.Handlebars.registerBoundHelper("cutFor", function(value) {
    var cutValue = value.toString();
    var pos = cutValue.indexOf('.');
    return cutValue.substr(0, pos+3);
});

Ember.Handlebars.registerBoundHelper("loadHeroGif", function(value) {
    var image = new Image();
    image.src = "images/animated/"+value+"-male.gif";
    $(image).load(function() {
        console.log("ok");
        $('.hero-icon').html(this);
        console.log(this);
    });

});


/*Ember.Handlebars.helper('markdown', function(value) {
   var converter = new Showdown.converter();
    return new Handlebars.SafeString(converter.makeHtml(value));
});*/