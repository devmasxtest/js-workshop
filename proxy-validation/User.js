let _name = "";
const balances = [];

class User {
  get name() {
    return _name;
  }
  set name(value) {
    _name = value.toUpperCase();
  }

  get fullName() {
    return `${_name}`;
  }

  get balanceHistory() {
    return balances;
  }

  get balance() {
    return balances[0];
  }

  set balance(value) {
    balances.unshift(value);
  }
}

const user = new User();
user.name = "Miguel";

console.log(user.name);

user.balance = 12;
user.balance = 10;
user.balance = 7;
console.log(user.balance);
console.log(user.balanceHistory);
