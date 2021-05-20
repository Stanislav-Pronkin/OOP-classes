import Character from './app';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
    Object.defineProperty(this, 'type', {
      enumerable: true,
      configurable: false,
      writable: false,
      value: 'Undead',
    });
  }
}
