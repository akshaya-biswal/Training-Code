// Polymorphism

class HouseBlueprint {
  constructor(owner, color, floor, area) {
    // console.log(this.target );
    if (this.target === HouseBlueprint) {
      throw new Error("Error");
    }
    this.owner = owner;
    this.color = color;
    this.#floor = floor; // Private
    this._area = area; // Protected
  }

  #floor;

  getDetails() {
    console.log(this.owner, this.#floor, this._area, this.color);
  }
}

class LuxuryHouse extends HouseBlueprint {
  constructor(owner, color, floor, area, hasGarden, hasGolfCourse) {
    super(owner, color, floor, area);
    this.hasGarden = hasGarden;
    this.hasGolfCourse = hasGolfCourse;
  }

  getDetails() {
    console.log(this.owner, this._area, this.color);
    // if (this.hasGarden) {
    console.log(this.hasGarden);
    // }
    // if (this.hasGolfCourse) {
    console.log(this.hasGolfCourse);
    // }
  }
}

const house1 = new LuxuryHouse("Hello World", "Green", 1, 100, true, true);

// console.log(house1.getDetails());

console.log(house1._area);
