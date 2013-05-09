(function() {
  'use strict';

  mt.models.App = Backbone.Model.extend({
    initialize: function() {
      console.log('App initialize');
    },

    start: function() {
      Backbone.history.start() // Start front end routing
    },

    router: new mt.routers.Main
  });
})();
