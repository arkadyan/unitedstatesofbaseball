import DS from 'ember-data';

var Player = DS.Model.extend({
  name: DS.attr('string'),
  position: DS.attr('string'),
  // team: DS.belongsTo('team')
});

Player.reopenClass({
  FIXTURES: [
    {
      id: 501,
      name: 'John Doe',
      position: '1B',
      team: 'ME'
    }
  ]
});

export default Player;
