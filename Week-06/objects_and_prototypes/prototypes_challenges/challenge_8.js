function Library() {
  this.books = [];
}

// adding few methods that are described in the challenge to the Library function prototype

Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.findBook = function (title) {
  return this.books.includes(title) ? "Book found" : "Book not found";
};

const library = new Library();

library.addBook("Harry Potter");
library.addBook("The Habbit");
library.addBook("Moby-Dick");

console.log(library.findBook("Harry Potter"));
console.log(library.findBook("Atomic Habbits"));
console.log(library.findBook("Moby-Dick"));
