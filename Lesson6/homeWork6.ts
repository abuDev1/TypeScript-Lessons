// Задание 1: Определение класса

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

// class Cat extends Animal {
//     constructor(name: string, age: number) {
//         super(name, age)
//     }

//     speak(): void {
//         console.log("Meow, meow!");
//     }
// }

// let animal = new Animal ('Dog', 2);
// let dog = new Dog ('Rex', 3);
// let cat = new Cat ('Milka', 4);

// animal.speak();
// dog.speak();
// cat.speak();

