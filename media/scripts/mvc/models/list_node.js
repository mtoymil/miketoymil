(function() {
  'use strict';

  mt.models.ListNode = Backbone.Model.extend({
    initialize: function(options) {
      options = options || {};
      this.list = new Backbone.Collection(options.list || []);
      // TODO set up events
    }
    defaults: {
    }
  });



})();
