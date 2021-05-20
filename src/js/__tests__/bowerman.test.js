import Bowerman from '../bowerman';

test('Bowerman', () => {
  const character = new Bowerman('Bob', 'Swordsman');

  expect(character).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowerman',
  });
});
