import Character from './app';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
    Object.defineProperty(this, 'type', {
      enumerable: true,
      configurable: false,
      writable: false,
      value: 'Zombie',
    });
  }
}
