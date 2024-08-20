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
