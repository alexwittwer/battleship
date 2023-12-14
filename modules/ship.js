export default class Ship {
  constructor(health, id, player) {
    this.length = health;
    this.health = health;
    this.status = this.updateStatus(this.health);
    this.id = id;
    this.player = player;
  }

  updateStatus(health = 0) {
    return health === 0 ? "sunk" : "alive";
  }

  hit() {
    this.health--;
    return this.health > 0 ? null : (this.status = this.updateStatus());
  }
}
