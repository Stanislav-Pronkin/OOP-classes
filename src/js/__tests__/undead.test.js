import Undead from '../undead';

test('Undead', () => {
  const character = new Undead('Bob', 'Bowerman');

  expect(character).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Undead',
  });
});
