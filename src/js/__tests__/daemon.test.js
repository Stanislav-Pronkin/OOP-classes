import Daemon from '../daemon';

test('Daemon', () => {
  const character = new Daemon('Bob', 'Bowerman');

  expect(character).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Daemon',
  });
});
