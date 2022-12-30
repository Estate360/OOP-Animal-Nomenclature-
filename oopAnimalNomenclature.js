// Parent Class
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
  Eat = "All Living Animal eats!";
}

// Inheritance/Child Class
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

  static animalKingdom() {
    return "Arthropoda";
  }
  wings() {
    return `Presence of wings is one of the characteristics of Arthropoda, e.g is ${this.name}`;
  }
  circulatorySystem() {
    return `${this.name}s have an open circulatory system`;
  }
  sensoryOrgans() {
    return `${this.name}s contain sensory organs like hairs, antennae, simple and compound eyes, auditory organs, and statocyst`;
  }
}

class Fish extends Animal {
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

  swim() {
    return `${this.name} are ${this.bodyTemperature} and ${this.skeletalStructure}. They live in water and feed on inferior members of the population.`;
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
    return `${this.name}s have bones. They live both in ${this.habitat}.`;
  }
}

class Reptiles extends Animal {
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

  territorial() {
    return `${this.name} have ${this.skeletalStructure} and are ${this.bodyTemperature}, this makes them territorial.`;
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
    return `A ${this.name} ${this.skeletalStructure} and ${this.wingspan} span of wings for flying.`;
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
    return `Most mammals have claws e.g is the ${this.name}. They mostly use it as a mode of defense and protection against predators.
    `;
  }
  soundVoice() {
    return `${this.name}s ${this.sound}.`;
  }
}

// Instantiating the Child Classes
const arthropoda = new Arthropoda(
  "butterfly",
  "with out bone",
  "coldblooded",
  "land and air",
  "varies",
  "vertebrates, spiders, snakes and possums"
);
const fish = new Fish(
  "sharks",
  "with bone",
  "coldblooded",
  "water",
  "5 years",
  "bony fishes, sea birds"
);
const amphibia = new Amphibia(
  "frog",
  "with bone",
  "coldblooded",
  "water and land",
  "twelve years",
  "insects"
);
const reptiles = new Reptiles(
  "tortoise",
  "with bone",
  "coldblooded",
  "water and land",
  "fifty years",
  "fungi",
  "vegetables"
);
const aves = new Aves(
  "bird",
  "with bone",
  "warmblooded",
  "air and land",
  "fifty years",
  "chicks",
  "one hundred and twenty centimeters"
);
const mammal = new Mammal(
  "cat",
  "with bone",
  "warmblooded",
  "land",
  "fourteen years",
  "rat",
  "meow"
);

console.log("(1)");
console.log(arthropoda);
console.log(arthropoda.wings());
console.log(arthropoda.circulatorySystem());
console.log(arthropoda.sensoryOrgans());

console.log("(2)");
console.log(fish);
console.log(fish.swim());

console.log("(3)");
console.log(amphibia);
console.log(amphibia.jump());

console.log("(4)");
console.log(reptiles);
console.log(reptiles.territorial());

console.log("(5)");
console.log(aves);
console.log(aves.fly());

console.log("(6)");
console.log(mammal);
console.log(mammal.soundVoice());
console.log(mammal.claws());
