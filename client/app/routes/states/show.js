import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('state', params.team_id);
  }
});
