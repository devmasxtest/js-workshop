const user = { name: "" };
// console.log(Object.getOwnPropertyDescriptor({ name: "" }, "name"));
console.log(
  Object.defineProperty(user, "name", {
    get: value => {
      console.log("GET name");
      return value;
    }
  })
);

console.log(user.name);
