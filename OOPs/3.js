// Inheritance

class HouseBlueprint {
  constructor(owner, color, floor, area) {
    this.owner = owner;
    this.color = color;
    this.#floor = floor; // Private
    this._area = area; // Protected
  }

  #floor;
}

class LuxuryHouse extends HouseBlueprint {
  constructor(owner, color, floor, area, hasGarden, hasGolfCourse) {
    super(owner, color, floor, area);
    this.hasGarden = hasGarden;
    this.hasGolfCourse = hasGolfCourse;
  }
}

const house1 = new LuxuryHouse("Hello World", "Green", 1, 100, true, false);

console.log(house1);
