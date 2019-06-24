const joinProp = (listProperties = []) =>
  function(target, key) {
    const getter = function() {
      return listProperties.map(it => this[it]).join(" ");
    };
    Object.defineProperty(target, key, {
      get: getter,
      set() {},
      enumerable: true
    });
  };

const toStringProps = () => (target: any) => {
  target.prototype.toString = function() {
    return Object.getOwnPropertyNames(this).join(" ");
  };
  return target;
};

@toStringProps()
class Person {
  id: string;
  name: string;
  surname: string;
  @joinProp(["name", "surname"])
  fullName;

  sayHi() {}
}

let p = new Person();

p.name = "Miguel";
p.surname = "Savignano";
console.log("fullName", p.fullName);
const r = p.toString();
console.log("toString ->", r);
