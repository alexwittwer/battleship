export default class Ship {
  constructor(health, id) {
    this.start = null;
    this.end = null;
    this.length = health;
    this.health = health;
    this.status = this.updateStatus(this.health);
    this.id = id;
  }

  updateStatus(health = 0) {
    return health === 0 ? "sunk" : "alive";
  }

  hit() {
    this.health--;
    return this.health > 0 ? null : (this.status = this.updateStatus());
  }
}
