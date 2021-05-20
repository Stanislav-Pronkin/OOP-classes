import Swordsman from '../swordsman';

test('Swordsman', () => {
  const character = new Swordsman('Bob', 'Bowerman');

  expect(character).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Swordsman',
  });
});
