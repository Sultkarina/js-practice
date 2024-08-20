const person = {
  name: "Alice",
  age: 25,
  gender: "female",
  interests: ["reading", "traveling", "sports"],
};

function showPersonInfo(person) {
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

showPersonInfo(person);
