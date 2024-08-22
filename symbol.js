const id = Symbol("id");

const user = {
  [id]: 12345,
  name: "Bob"
};

// Доступ к свойству через символ
console.log(user[id]);

// Попытка перезаписи или случайного доступа к символическому свойству
user.id = "New ID";
console.log(user.id); 
console.log(user[id]);