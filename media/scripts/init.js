(function() {
  window.app = new mt.models.App();
  window.appView = new mt.views.AppView({model: app, el: $('body')});
  window.app.start();
})();
