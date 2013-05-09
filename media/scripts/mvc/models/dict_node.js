(function() {
  'use strict';

  mt.models.DictNode = Backbone.Model.extend({
    initialize: function(options) {
      options = options || {};
      this.children = {};
    },

    defaults: {
    }
  });
})();
