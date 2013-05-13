App = Ember.Application.create();

App.Router.map(function() {
  this.resource("bio");
  this.resource("skills");
  this.resource("projects");
  this.resource("hobbies");
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
        key: 'editor',
        value: 'vim',
        url: 'http://en.wikipedia.org/wiki/Vim_(text_editor)'
      },
      {
        key: 'location',
        value: 'boulder, co',
        url: 'http://lmgtfy.com/?q=boulder%2C+co',
      },
      {
        key: 'team',
        value: 'something coded',
        url: 'http://www.somethingcoded.net'
      },
      {
        key: 'freelancing',
        value: 'available',
        url: 'mailto:mike.toymil@gmail.com'
      }
    ];
  }
});
