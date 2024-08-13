// let person: {name: string, age?: number};// ? - значит это свойство может быть или не быть.

////////// Описание типа объекта

// let person: {name: string, age: number};

// person = {
//     name: "Muslim",
//     age: 33
// }

/////////// Пример 1. Объект книга

// let book: {title: string, author: string, pages: number}

// book = {
//     title: "Типы данных в TS",
//     author: "Джон Смит",
//     pages: 250
// }

//// Делаем интерфейс из примера

// interface Book {
//     title: string 
//     author: string 
//     pages: number
// }

// let book: Book = {
//     title: "Типы данных в TS",
//     author: "Джон Смит",
//     pages: 250
// }


/////////// Пример 2. Объект студент

// let  student: {firstName: string, lastName: string, age: number, grades?: number[]};

// student = {
//     firstName: 'Ivan',
//     lastName: 'Petrov',
//     age: 20,
//     grades: [5,4,6,2,8]
// }

// interface Student {
//     firstName: string
//     lastName: string
//     age: number
//     grades?: number[]
// }

// let student: Student = {
//     firstName: 'Ivan',
//     lastName: 'Petrov',
//     age: 20,
//     grades: [5,4,6,2,8]
// }


/////////// Пример 3. Объект пользователь

// let user: {userName: string, email: string};

// user = {
//     userName: 'user123',
//     email: 'user@mail.ru'
// }


// interface User {
//     userName: string
//     email: string
// }

// let user: User = {
//     userName: 'user123',
//     email: 'user@mail.ru'
// }

//////////// Интерфейсы


// interface Person {
//     name: string
//     age: number
// }

// // let person: Person;

// // person = {
// //     name: 'Muslim',
// //     age: 33
// // }

// //ИЛИ

// let person: Person = {
//     name: 'Muslim',
//     age: 33
// }