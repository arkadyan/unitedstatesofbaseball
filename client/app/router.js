import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
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

export default Router;
