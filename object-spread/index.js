const obj = Object.assign({}, { name: "hola" }, { lastName: "12" });

const obj1 = { name: "hola" };
const obj2 = { lastName: "12" };
obj1["lastName"] = obj2["lastName"];

console.log(obj);

const myFnc = (obj, ...rest) => {};
