class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi ${this.name}`);
  }

  static info() {
    console.log(`Hi ${this.name}`);
  }
}

Animal.name = "Miguel";

Animal.info();
