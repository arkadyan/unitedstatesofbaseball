import DS from 'ember-data';

export default DS.Model.extend({
  state_code: DS.attr('string'),
  name: DS.attr('string'),
  nickname: DS.attr('string'),
  parkImage: DS.attr('string'),
  mapId: DS.attr('number'),
  players: DS.hasMany('player')
});
