// // Задание 1: Определение класса
// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// class Person {
//     name: string
//     age: number
//     constructor(name: string, age?: number){
//         this.name = name
//         // this.age = age
//     }
//     introduce(): void {
//         console.log(`Привет, меня зовут ${this.name}`);
//     }
// }
// let person = new Person('Khusein');
// person.introduce();
//Задание 2: Наследование
// class Student extends Person {
//     cours: number;
//    constructor(cours: number, name: string){
//     super(name);
//     this.cours = cours;
//    }
//     talkAboutCourse(): void {
//         console.log(`Я учусь на ${this.cours} курсе`); 
//     }
// }
// let student = new Student (3, 'Khusein')
// student.talkAboutCourse();
// Задание 3: Полиморфизм
// class Person {
//     name: string
//     age: number
//     constructor(name: string, age?: number){
//         this.name = name
//         // this.age = age
//     }
//     talkAboutCourse(): void {
//         console.log(`Привет, меня зовут ${this.name}`);
//     }
// }
// class Student extends Person {
//     cours: number;
//    constructor(cours: number, name: string){
//     super(name);
//     this.cours = cours;
//    }
//     talkAboutCourse(): void {
//         console.log(`Привет, меня зовут ${this.name}. Я студент ${this.cours} курса.`); 
//     }
// }
// let person = new Person ("Khusein")
// let student = new Student (3, 'Khusein')
// person.talkAboutCourse();
// student.talkAboutCourse();
// Задание 4: Классы и Наследование
// class Animal {
//     name: string
//     age: number
//     constructor (name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     speak(): void {
//         console.log("Unknown sound...");
//     }
// }
// class Dog extends Animal {
//     constructor(name: string, age: number) {
//         super(name, age);
//     }
//     speak(): void {
//         console.log("Woof, woof!");
//     }
// }
// let animal = new Animal ('Dog', 2);
// let dog = new Dog ('Rex', 3);
// animal.speak();
// dog.speak();
// Задание 5: Полиморфизм
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.speak = function () {
        console.log("Unknown sound...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age) || this;
    }
    Dog.prototype.speak = function () {
        console.log("Woof, woof!");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        return _super.call(this, name, age) || this;
    }
    Cat.prototype.speak = function () {
        console.log("Meow, meow!");
    };
    return Cat;
}(Animal));
var animal = new Animal('Dog', 2);
var dog = new Dog('Rex', 3);
var cat = new Cat('Milka', 4);
animal.speak();
dog.speak();
cat.speak();
