import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('team', { state_code: params.state_code });
  }
});
