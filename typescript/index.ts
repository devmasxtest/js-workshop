class Animal {
  static myname;
  constructor(public name: string) {}

  sayHi() {
    console.log(`Hi ${this.name}`);
  }

  static info() {
    console.log(`Hi ${this.name}`);
  }
}

// console.log("Hola", Animal.myname);

console.log(new Animal("Dog").sayHi());

// interface IMyResponse<T> {
//   response: T;
// }

// const myResponse = (callback: () => string): IMyResponse<string> => {
//   return { response: callback() };
// };

// const myResponseNumber = (callback: () => number): IMyResponse<number> => {
//   return { response: callback() };
// };

// console.log(myResponse(() => "Hola"));
// console.log(myResponseNumber(() => 12));

// Animal.myname = "Miguel";

// Animal.info();

// console.log("Hola", Animal.myname);

// console.log(new Animal("Dog").sayHi());
