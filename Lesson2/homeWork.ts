// Array (массив):

// 1.

// let numbers: number[] = [1,2,3,4,5];

// // 2.

// let fruits: string[] = ['orange', 'cherry', 'apple'];

// // 3.

// let someArr: [string, number, boolean] = ['Hello', 33, true];

// Tuple (кортеж):

// let person: [string, string, number] = ["Khusein", "Djabrailov", 31];

// let flowers: [string, string];

// flowers = ['rose', 'tulip'];

// Never:

// 1, 2

// let a = 1;

// let someFunc = (arg): never => {
//     while (true) {
//         console.log(arg);
//     }
// }

// someFunc(1);

// 3.

// const message1 = "hello";

// const error1 = (msg: string): never => { // функция, которая возвращает раз за разом что-то
//     throw new Error(msg)
// }

// Object:

// 1.

// let bookObj: object = {name: "Хижина дяди Тома", author: 'Гарриет Бичер-Стоу', year: 1852};

// // 2.

// let aboutMe: object = {name: "Khusein", surname: "Djabrailov", age: 31};

// 3.

// let someFunc = (obj: object): void => {
//     console.log();
// }

// someFunc({});

// Any

// 1.

// let colour: any = "green";

// // 2.

// let list: Array<any> = ['A', 3, {a:3}];

// // 3.

// let someFunc = (x: any): void => {

// }

// Type:

// 1.

// type Person = {
//     name: string,
//     age: number
// }

// let personObj: Person = {
//     name: "Muslim",
//     age: 18
// }

// // 2.

// type Product = {
//     name: string,
//     price: number,
//     inStock: boolean
// }

// let productObj: Product = {
//     name: "Phone",
//     price: 999,
//     inStock: true
// }

// 3.

// type User = {
//     id: number,
//     username: string,
//     email: string
// }

// let userObj: User = {
//     id: 54353,
//     username: "Maximus",
//     email: 'gg@gg.com'
// }

// 4.

// type Account = {
//     id: number,
//     balance: number
// }

// let accountObj: Account = {
//     id: 85565464,
//     balance: 99999999
// }

