class User {
  constructor() {
    this.age;
    this.name;
    this.email;
  }
}

const customValidate = {
  ensureFormatWith: (obj, propertyName, regexp = new RegExp()) =>
    new Proxy(obj, {
      set(target, key, value) {
        if (propertyName === key) {
          console.log(target, key, value);
          if (!regexp.test(value))
            throw new Error(
              `Invalid format, ${key} must validate with ${regexp}`
            );
        }
      }
    }),
  typeProperty: (obj, propertyName, typeOfName) =>
    new Proxy(obj, {
      set(target, key, value) {
        if (propertyName === key) {
          console.log(target, key, value);
          if (typeof value !== typeOfName)
            throw new Error(`Invalid type, ${key} must be a ${typeOfName}`);
        }
      }
    }),
  ensureNumber: (obj, propertyName) =>
    new Proxy(obj, {
      set(target, key, value) {
        if (propertyName === key) {
          console.log(target, key, value);
          if (typeof value !== "number")
            throw new Error(`Invalid type, ${key} must be a number`);
        }
      }
    })
};

const user = new User();
let userDecorate = customValidate.ensureNumber(user, "age");
userDecorate = customValidate.typeProperty(user, "name", "string");

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
userDecorate = customValidate.ensureFormatWith(user, "email", EMAIL_REGEX);

// console.log((userDecorate.age = 12));
// // console.log((userDecorate.age = "12"));
// console.log((userDecorate.name = "Miguel"));
// // console.log((userDecorate.name = 12));

console.log((userDecorate.email = "example@mail.com"));
console.log((userDecorate.email = "example@"));
