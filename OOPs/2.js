// Abstraction

class HouseBlueprint {
  constructor(owner, color, floor, area) {
    this.owner = owner;
    this.color = color;
    this.#floor = floor; // Private
    this._area = area; // Protected
  }

  #floor;

  #construction() {
    console.log("Foundation");
    console.log("Framing");
    console.log("Electrical");
    console.log(this.#floor);
  }

  buildingHouse() {
    console.log("Start --------");
    this.#construction();
    console.log("Completed ------");
  }
}

const house1 = new HouseBlueprint("Hello World", "Green", 1, 100);

console.log(house1.buildingHouse());
// console.log(house1.#construction());
