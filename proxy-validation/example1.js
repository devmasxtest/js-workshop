const Validators = {
  required: value => !!value,
  minLength: length => value => value.length > length
};

const schemaValidation = {
  name: [Validators.required, Validators.minLength(4)],
  surname: [Validators.required]
};

const validSchemaProp = (prop, schema) => {
  if (!Object.keys(schema).includes(prop))
    throw new Error(`Invalid key ${prop}`);
};

const docorateValidation = (obj, schema) =>
  new Proxy(obj, {
    set(target, prop, value) {
      validSchemaProp(prop, schema);
      const validations = schema[prop] || [];
      const isValid = validations.every(validation => validation(value));
      if (isValid) {
        console.log("OK");
      } else {
        console.log("error");
        throw Error(`Invalid prop ${prop}`);
      }
      // console.log("Proxy", target, prop, value);
      target[prop] = value;
    }
  });

const schemaAccessors = {
  name: value => `${value}!!!`,
  fullName(value) {
    return `${this.name} ${this.lastName}`;
  }
};

const decorateAccessors = (obj, schema = {}) =>
  new Proxy(obj, {
    get(target, prop) {
      if (!schema.hasOwnProperty(prop)) {
        return target[prop];
      }
      const accesorFnc = schema[prop].bind(target);
      return accesorFnc(target[prop]);
    }
  });

// const user = docorateValidation({}, schemaValidation);
// user.name = "Miguel";
// console.log(user.name);

const user = decorateAccessors({}, schemaAccessors);
user.name = "Miguel";
user.lastName = "Sa";
console.log(user.name);
console.log(user.fullName);

// user.lastname = "11212";
// user.name = null;
