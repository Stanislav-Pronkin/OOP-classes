import Magician from '../magician';

test('Magician', () => {
  const character = new Magician('Bob', 'Bowerman');

  expect(character).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Magician',
  });
});
