App = Ember.Application.create();

App.Router.map(function() {
  this.resource("projects");
  this.resource("clients");
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        key: 'type',
        value: 'web developer',
        url: 'media/images/spider.jpg',
      },
      {
        key: 'specialization',
        value: 'javascript',
        url: 'media/images/kitten.jpg'
      },
      {
        key: 'clients',
        value: '[...]',
        url: '/#/clients'
      },
      {
        key: 'projects',
        value: '[...]',
        url: '/#/projects'
      },
      {
        key: 'location',
        value: 'boulder, co',
        url: 'http://lmgtfy.com/?q=boulder%2C+co',
      },
      {
        key: 'freelancing',
        value: 'js, python/django',
        url: 'mailto:mike.toymil@gmail.com'
      }
    ];
  }
});
