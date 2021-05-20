import Zombie from '../zombie';

test('Zombie', () => {
  const character = new Zombie('Bob', 'Bowerman');

  expect(character).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Zombie',
  });
});
