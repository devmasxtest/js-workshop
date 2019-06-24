interface IFlayingAnimal {
  fly: () => {};
  numberWings: number;
}

class Animal {
  public static readonly myname;
  constructor(public name: string) {}

  sayHi() {
    console.log(`Hi ${this.name}`);
  }

  static info() {
    console.log(`Hi ${this.name}`);
  }
}

class Bird extends Animal implements IFlayingAnimal {
  fly: () => {};
  numberWings: number;
  colot = "Black";
}

class Parrot extends Animal implements IFlayingAnimal {
  fly: () => {};
  numberWings: number;
  age = 12;
}

const animalShop = (typeAnimal): Parrot | Bird => {
  if (typeAnimal == "Parrot") {
    return new Parrot("Parrot");
  } else if (typeAnimal == "Parrot") {
    return new Bird("Bird");
  }
};

const myanimal = animalShop("Parrot");
if (myanimal instanceof Parrot) {
  myanimal.age;
}

// new Parrot("Parrot");

// new Animal("Dog").name = "asdas";

// // console.log("Hola", Animal.myname);

// console.log(new Animal("Dog").sayHi);

// // const myResponse = (callback: () => {}) => {
// //   return { response: callback() };
// // };

// // console.log(myResponse(() => "Hola"));
// // console.log(myResponse(() => 12));
// // console.log(myResponse(() => new Animal("Cat")));

// // Animal.myname = "Miguel";

// // Animal.info();

// // console.log("Hola", Animal.myname);

// // console.log(new Animal("Dog").sayHi());
