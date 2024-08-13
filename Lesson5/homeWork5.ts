// Задание 1: Создание типизированных объектов

// let student: {name: string; age: number};

// student = {
//     name: "Muslim",
//     age: 25
// }

// Задание 2: Использование интерфейсов

// interface Animal {
//     name: string
//     age: number
// }

// let dog: Animal = {
//     name: 'Rex',
//     age: 4
// }

//Задание 3: Работа с опциональными свойствами

// interface Employee {
//     name: string
//     age: number
//     department?: string
// }

// let employee: Employee = {
//     name: 'Maximus',
//     age: 33
// }

//Задание 4: Работа с массивами объектов 

// interface Student {
//     name: string
//     grades: number[]
// }

// let students: Student[] = [{
//     name: 'Max',
//     grades: [1,2,3,4,5]
// }]

// Задание 5: Работа с функциями и типизированными объектами

interface Book {
    title: string
    author: string
    pages: number
}

let printBookInfo  = (book: Book) => book;

let book1: Book = {
    title: "Harry Potter",
    author: 'Joanne Kathleen Rowling',
    pages: 600
}

let book2: Book = {
    title: "The Lord of the Rings",
    author: "John Ronald Reuel Tolkien",
    pages: 1500
}

console.log(printBookInfo(book1));
console.log(printBookInfo(book2));




