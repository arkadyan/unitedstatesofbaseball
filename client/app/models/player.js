import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  position: DS.attr('string'),
  team: DS.belongsTo('team')
});
