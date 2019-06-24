function logProperty(target: any, key: string) {
  let value;

  const getter = function() {
    console.log(`Get => ${key}`);
    return value;
  };

  const setter = function(newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

function requiredProp(target: any, key: string) {
  let value;

  const getter = function() {
    return value;
  };

  const setter = function(newVal) {
    if (newVal) {
      value = newVal;
    } else {
      throw Error(`Property ${key} is required`);
    }
  };
  Reflect.defineProperty(target, key, {
    get: getter,
    set: setter
  });
}

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

const ToStringProp = () => (target: any) => {
  target.prototype.toString = function() {
    console.log(Object.getOwnPropertyDescriptor(this, "fullName"));
    for (let key in this) {
      console.log(key);
    }
    console.log(Object.keys(this));
    return Object.getOwnPropertyNames(this).join(" ");
  };
};

@ToStringProp()
class Person {
  // @logProperty
  id: string;
  name: string;
  surname: string;
  @joinProp(["name", "surname"])
  fullName: string;

  sayHi() {}

  // @requiredProp
}

let p = new Person();

p.id = "Miguel";
p.name = "Miguel";
p.surname = "Savignano";
console.log(p.fullName);
// @ts-ignore
const r = p.toString();
console.log(r);
// p.id = "";
