function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const book1 = new Book("Book Title 1", "Author 1", 2001);
const book2 = new Book("Book Title 2", "Author 2", 2005);

function print(book) {
  console.log(`"${book.title}" ${book.author}, ${book.year}`);
}

print(book1);
print(book2);
