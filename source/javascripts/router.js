/*global App */

App.Router.map(function() {
  this.resource('teams', { path: '/' }, function() {
    this.resource('team', { path: '/:team_id' });
    // this.resource('team', { path: '/:state_code' });
  });
});

// App.StatesRoute = Ember.Route.extend({
//   // model: function() {
//   //   return this.store.find('state');
//   // }
// });

// App.TeamRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('team', { code: params.state_code });
//   }
// });
