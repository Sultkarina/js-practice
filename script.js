const calculator = {
  sum(a, b) {
    return this.a + this.b;
  },

  multiply(a, b) {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("Введите первое значение: ");
    this.b = +prompt("Введите второе значение: ");
  },
};

calculator.read();
alert.log(calculator.sum());
alert.log(calculator.multiply());

let objectA = { name: "A" };
let objectB = { name: "B" };

objectA.link = objectB;
objectB.link = objectA;

// Устранение циклической ссылки
objectA.link = null;
objectB.link = null;

//После удаления ссылок, объекты больше не связаны и сборщик мусора сможет освободить их память

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

