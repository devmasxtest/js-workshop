class User {}
class Person {}

const getInstance = ({ UserClass, PersonClass }) => className => {
  const user = null;
  const person = null;

  if (className == "User") {
    return user || new UserClass();
  }
  if (className == "Person") {
    return person || new PersonClass();
  }
};

const injector = getInstance({
  UserClass: new User(),
  PersonClass: new Person()
});

class ServiceUser {
  constructor() {
    const user = injector("User");
  }
}
