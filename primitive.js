const user = {
  name: "Charlie",
  age: 30,

  toString() {
    return this.name;
  },
  valueOf() {
    return this.age;
  },
};

alert(user);
alert(+user);
alert(user - 10);
