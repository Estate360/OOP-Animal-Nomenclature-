//Parent Class
class Animal {
  constructor(
    name,
    skeletalStructure,
    bodyTemperature,
    habitat,
    lifespan,
    prey
  ) {
    this.name = name;
    this.skeletalStructure = skeletalStructure;
    this.bodyTemperature = bodyTemperature;
    this.habitat = habitat;
    this.lifespan = lifespan;
    this.prey = prey;
  }

  Alive = true;

  #eat() {
    return "Animals can eat";
  }

  eat() {
    this.#eat();
    return `${this.name} that are ${this.bodyTemperature} and also ${this.skeletalStructure} can eat.`;
  }
}

//Inheritance Class
class Arthropoda extends Animal {
  constructor(
    name,
    skeletalStructure,
    bodyTemperature,
    habitat,
    lifespan,
    prey
  ) {
    super(name, skeletalStructure, bodyTemperature, habitat, lifespan, prey);
  }

  wings() {
    return `Presence of wings is one of the characteristics of ${this.name}`;
  }

  circulatorySystem() {
    return `${this.name}s have an open circulatory system`;
  }

  sensoryOrgans() {
    return `${this.name}s contain sensory organs like hairs, antennae, simple and compound eyes, auditory organs, and statocyst`;
  }
}

class Fish extends Animal {
  constructor(name, skeletalStructure, bodyTemperature, habitat, prey) {
    super(name, skeletalStructure, bodyTemperature, habitat, prey);
    super.lifespan = "5 Years";
  }

  swim() {
    return `${this.name} with ${this.skeletalStructure} and ${this.bodyTemperature} love to swim.`;
  }
}

class Amphibia extends Animal {
  constructor(
    name,
    skeletalStructure,
    bodyTemperature,
    habitat,
    lifespan,
    prey
  ) {
    super(name, skeletalStructure, bodyTemperature, habitat, lifespan, prey);
  }

  jump() {
    return `${this.name} with ${this.skeletalStructure} loves to jumps on ${this.habitat}.`;
  }
}

class Reptiles extends Animal {
  constructor(
    name,
    skeletalStructure,
    bodyTemperature,
    habitat,
    lifespan,
    prey,
    diet
  ) {
    super(name, skeletalStructure, bodyTemperature, habitat, lifespan, prey);
    this.diet = diet;
  }

  territorial() {
    console.log(
      `${this.name} with ${this.skeletalStructure} and ${this.bodyTemperature} are territorial.`
    );
  }
}

class Aves extends Animal {
  constructor(
    name,
    skeletalStructure,
    bodyTemperature,
    habitat,
    lifespan,
    prey,
    wingspan
  ) {
    super(name, skeletalStructure, bodyTemperature, habitat, lifespan, prey);
    this.wingspan = wingspan;
  }

  fly() {
    console.log(
      `A ${this.name} ${this.skeletalStructure} and ${this.wingspan} span of wings for flying.`
    );
  }
}

class Mammal extends Animal {
  constructor(
    name,
    skeletalStructure,
    bodyTemperature,
    habitat,
    lifespan,
    prey,
    sound
  ) {
    super(name, skeletalStructure, bodyTemperature, habitat, lifespan, prey);
    this.sound = sound;
  }

  claws() {
    console.log(
      ` The ${this.name} ${this.skeletalStructure} and ${this.bodyTemperature} loves to claw.`
    );
  }
}

const arthropoda = new Arthropoda(
  "butterfly",
  "withoutbone",
  "coldblooded",
  "land and air"
);
const fish = new Fish("fish", "withbone", "coldblooded", "water", "five years");
const amphibia = new Amphibia(
  "frog",
  "withbone",
  "coldblooded",
  "water and land",
  "twelve years",
  "insects"
);
const reptiles = new Reptiles(
  "tortoise",
  "withbone",
  "coldblooded",
  "water and land",
  "fifty years",
  "fungi",
  "vegetables"
);
const aves = new Aves(
  "bird",
  "withbone",
  "warmblooded",
  "air and land",
  "fifty years",
  "chicks",
  "carrion",
  "one hundred and twenty centimeters"
);
const mammal = new Mammal(
  "cat",
  "withbone",
  "warmblooded",
  "land",
  "fourteen years",
  "rat",
  "rice",
  "meow"
);

console.log(Animal.name);
console.log(Animal.bodyTemperature);
console.log(Animal.skeletalStructure);


console.log(arthropoda.name);
console.log(arthropoda.bodyTemperature);
console.log(arthropoda.skeletalStructure);
console.log(arthropoda.habitat);
console.log(arthropoda.prey);
console.log(arthropoda.eat());

console.log(fish.name);
console.log(fish.bodyTemperature);
console.log(fish.skeletalStructure);
console.log(fish.habitat);
console.log(fish.lifespan);
console.log(fish.swim);
console.log(fish.eat);

console.log(amphibia.name);
console.log(amphibia.bodyTemperature);
console.log(amphibia.skeletalStructure);
console.log(amphibia.habitat);
console.log(amphibia.lifespan);
console.log(amphibia.prey);
console.log(amphibia.jump);
console.log(amphibia.eat);

console.log(reptiles.name);
console.log(reptiles.bodyTemperature);
console.log(reptiles.skeletalStructure);
console.log(reptiles.habitat);
console.log(reptiles.lifespan);
console.log(reptiles.prey);
console.log(reptiles.diet);
console.log(reptiles.territorial);
console.log(reptiles.eat);

console.log(aves.name);
console.log(aves.bodyTemperature);
console.log(aves.skeletalStructure);
console.log(aves.habitat);
console.log(aves.lifespan);
console.log(aves.prey);
console.log(aves.diet);
console.log(aves.wingspan);
console.log(aves.fly);
console.log(aves.eat);
