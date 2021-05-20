// TODO: write your code here
const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Недопустимые символы');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('Имя может содержать от 2 до 10 символов');
    } else if (!types.includes(type)) {
      throw new Error('Недопустимый тип');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
