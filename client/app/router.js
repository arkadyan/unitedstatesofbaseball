import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('teams', { path: '/' }, function() {
    this.route('show', { path: ':team_id' });
    // this.resource('team', { path: '/:state_code' });
  });
});

// Route.TeamRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('team', { code: params.state_code });
//   }
// });

export default Router;
