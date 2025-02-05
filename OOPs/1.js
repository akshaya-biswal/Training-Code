// Encapsulation

class HouseBlueprint {
  constructor(owner, color, floor, area) {
    this.owner = owner;
    this.color = color;
    this.#floor = floor; // Private
    this._area = area; // Protected
  }

  #floor;

  getFloor() {
    return this.#floor;
  }

  setFloor(value) {
    this.#floor = value;
  }
}

const house1 = new HouseBlueprint("Hello World", "Green", 1, 100);

console.log(house1.owner);
console.log(house1.getFloor());

house1.owner = "Hello Earth";

house1.setFloor(122);
console.log(house1);
