/*global App, DS */

App.Player = DS.Model.extend({
  name: DS.attr('string'),
  position: DS.attr('string'),
  // team: DS.belongsTo('team')
});

App.Player.FIXTURES = [
{
  id: 501,
  name: 'John Doe',
  position: '1B',
  team: 'ME'
}
];
