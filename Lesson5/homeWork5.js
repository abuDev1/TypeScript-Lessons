// Задание 1: Создание типизированных объектов
var printBookInfo = function (book) { return book; };
var book1 = {
    title: "Harry Potter",
    author: 'Joanne Kathleen Rowling',
    pages: 600
};
var book2 = {
    title: "The Lord of the Rings",
    author: "John Ronald Reuel Tolkien",
    pages: 1500
};
console.log(printBookInfo(book1));
console.log(printBookInfo(book2));
