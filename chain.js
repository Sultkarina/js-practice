const user = {
  name: "Alice",
  address: {
    city: "Wonderland",
    street: "Rabbit Hole",
  },
  contact: {
    email: "alice@example.com",
  },
};

// обращения к cуществующим свойствам
console.log("Name: ", user?.name);
console.log("Address: " + user.address?.city + ", " + user.address?.street);
console.log("Email: " + user.contact?.email);

// обращения к не существующим свойствам
console.log(user.telephone?.home);
