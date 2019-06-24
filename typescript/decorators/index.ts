const joinProp = (listProperties = []) => (target: any, key: string) => {
  const getter = function() {
    return listProperties.map(it => this[it]).join(" ");
  };

  // Reflect.defineProperty(target, key, {
  //   get: getter
  // });
  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set() {},
      configurable: true,
      enumerable: true
    });
  }
};

const toStringProps = () => (target: any) => {
  target.prototype.toString = function() {
    console.log(
      "properties",
      Object.getOwnPropertyDescriptor(this, "fullName")
    );
    // for (let key in this) {
    //   console.log(key);
    // }
    // console.log(Object.keys(this));
    return Object.getOwnPropertyNames(this).join(" ");
  };
};

@toStringProps()
class Person {
  @joinProp(["name", "surname"])
  fullName: string;

  id: string;
  name: string;
  surname: string;
  sayHi() {}
}

let p = new Person();

p.id = "Miguel";
p.name = "Miguel";
p.surname = "Savignano";
// console.log(p.fullName);
// @ts-ignore
const r = p.toString();
console.log(r);
// p.id = "";
