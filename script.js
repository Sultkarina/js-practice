const car = {
  brand: "Toyota",
  model: "Corolla",
  owner: {
    name: "John",
    age: 30,
  },
};

let clonedeep = {};
for (let key in car) {
  clonedeep[key] = car[key];
}
console.log("До глобального копирования: " + car.brand);
clonedeep.brand = "Honda";
console.log("После глобального копирования: " + car.brand + "\n");

let clone = Object.assign({}, car);
console.log("До поверхностного копирования: " + car.owner.name);
clone.owner.name = "Mike";
console.log("После поверхностного копирования: " + car.owner.name);
