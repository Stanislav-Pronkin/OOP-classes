import Character from '../app';

test('Character', () => {
  const character = new Character('Bob', 'Bowerman');

  expect(character).toEqual({
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowerman',
  });
});

test('Character', () => {
  expect(() => {
    const character = new Character(123, 'Bowerman');
    return character;
  }).toThrow('Недопустимые символы');
});

test('Character', () => {
  expect(() => {
    const character = new Character('B', 'Bowerman');
    return character;
  }).toThrow('Имя может содержать от 2 до 10 символов');
});

test('Character', () => {
  expect(() => {
    const character = new Character('abcdefgqwert', 'Bowerman');
    return character;
  }).toThrow('Имя может содержать от 2 до 10 символов');
});

test('Character', () => {
  expect(() => {
    const character = new Character('Bob', 'Knight');
    return character;
  }).toThrow('Недопустимый тип');
});
