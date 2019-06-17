class User {
  constructor() {
    this.age;
    this.name;
    this.email;
    this.balance;
  }
}

const customValidate = {
  ensureFormatWith: (obj, propertyName, regexp = new RegExp()) =>
    new Proxy(obj, {
      set(target, prop, value) {
        target[prop] = value;
        if (propertyName === prop) {
          console.log(target, prop, value);
          if (!regexp.test(value))
            throw new Error(
              `Invalid format, ${prop} must validate with ${regexp}`
            );
        }
      }
    }),
  typeProperty: (obj, propertyName, typeOfName) =>
    new Proxy(obj, {
      set(target, prop, value) {
        target[prop] = value;
        if (propertyName === prop) {
          console.log(target, prop, value);
          if (typeof value !== typeOfName)
            throw new Error(`Invalid type, ${prop} must be a ${typeOfName}`);
        }
      }
    }),
  ensureNumber: (obj, propertyName) =>
    new Proxy(obj, {
      set(target, prop, value) {
        target[prop] = value;
        if (propertyName === prop) {
          target[prop] = value;
          console.log(target, prop, value);
          if (typeof value !== "number")
            throw new Error(`Invalid type, ${prop} must be a number`);
        }
      }
    })
};

const customTrasnform = {
  toFixed: (obj, propertyName, decPlaces = 2) =>
    new Proxy(obj, {
      set(target, prop, value) {
        if (propertyName === prop) {
          console.log(target, prop, value);
          target[prop] = value.toFixed(decPlaces);
        } else {
          target[prop] = value;
        }
      }
    })
};
const user = new User();

let userDecorate = customValidate.ensureNumber(user, "age");
userDecorate.age = 12;
// userDecorate.age = "12";

userDecorate = customValidate.typeProperty(user, "name", "string");
userDecorate.name = "Miguel";
// userDecorate.name = 12;

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
userDecorate = customValidate.ensureFormatWith(user, "email", EMAIL_REGEX);

userDecorate.email = "example@mail.com";
// userDecorate.email = "example@";

userDecorate = customTrasnform.toFixed(user, "balance");

userDecorate.balance = 12.7777777;
console.log(userDecorate.balance);
