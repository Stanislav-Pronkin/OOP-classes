import Character from './app';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    Object.defineProperty(this, 'type', {
      enumerable: true,
      configurable: false,
      writable: false,
      value: 'Magician',
    });
  }
}
