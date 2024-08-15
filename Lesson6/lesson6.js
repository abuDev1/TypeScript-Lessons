// class Car {
//     // Свойства класса
//     brand: string
//     model: string
//     year: number
//     // Метод класса
//     startEngine(): void {
//         console.log('Engine started');   
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let bugatti  = new Car(); // bugatti - экземпляр класса Car
// bugatti.brand = 'Bugatti'; 
// bugatti.model = 'Veyron';
// bugatti.year = 2010;
// bugatti.startEngine(); // выводит 'Engine started' в log
//////////////
// class Cat {
//     name: string
//     age: number
//     isHungry(): void {
//         console.log('I want to eat, master!');
//     }
// }
// let myCat = new Cat();
// myCat.name = 'Barsik';
// myCat.age = 5;
// myCat.isHungry();
//////////////// Конструктор класса
// class Car {
//     brand: string
//     model: string
//     year: number
//     /// Конструктор класса
//     constructor(brand: string, model: string, year: number) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     /// this - это обращение к свойствам класса
//     startEngine(): void {
//         console.log(`${this.brand}, ${this.model}, ${this.year}: Engine started`);   
//     }
// }
// let toyota = new Car('Toyota', 'Corolla', 2024);
// toyota.startEngine();
/////////////// Наследование
// class Venicle {
//     speed: number;
//     constructor(speed: number) {
//         this.speed = speed
//     }
//     move(): void {
//         console.log(`Moving at speed: ${this.speed}`);
//     }
// }
// class Car extends Venicle {
//     brand: string;
//     model: string;
//     constructor(brand: string, model: string, speed: number) {
//         super(speed) // super вызывает родительский конструктор т.е конструктор Venicle
//         this.brand = brand
//         this.model = model
//     }
//     startEngine(): void {
//         console.log(`${this.brand}, ${this.model}: Engine started`);        
//     }
// }
// let toyota = new Car('Toyota', 'Corolla', 220)
// toyota.startEngine();
// toyota.move();
///////////////// Полиморфизм
var Venicle = /** @class */ (function () {
    function Venicle(speed) {
        this.speed = speed;
    }
    Venicle.prototype.move = function () {
        console.log("Moving at speed: ".concat(this.speed));
    };
    return Venicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, speed) {
        var _this = _super.call(this, speed) || this; // super вызывает родительский конструктор т.е конструктор Venicle
        _this.brand = brand;
        _this.model = model;
        return _this;
    }
    Car.prototype.startEngine = function () {
        console.log("".concat(this.brand, ", ").concat(this.model, ": Engine started"));
    };
    Car.prototype.move = function () {
        _super.prototype.move.call(this); // super в данном случаи вызывает метод move от родителя, от которого наследуемся
        console.log("".concat(this.brand, ", ").concat(this.model, ": Vroooom!!!"));
    };
    return Car;
}(Venicle));
var toyota = new Car('Toyota', 'Corolla', 220);
toyota.startEngine();
toyota.move();
/////////////////// Модификатор доступа и свойства класса
// class Car {
//   public brand: string; // Доступен везде
//   private model: string; // Доступен внутри класса
//   protected year: number // Доступен внутри класса, а также в наследуемых классах 
//   constructor(brand: string, model: string, year?: number) {
//     this.brand = brand;
//     this.model = model;
//   }
//   startEngine(): void {
//     console.log(`${this.brand}, ${this.model}: Engine started`);
//   }
// }
// let toyota = new Car('Toyota', 'Corolla')
// toyota.startEngine();
///////////////////////////////////// Public
// class Car {
//   public brand: string; // Доступен везде
//   constructor(brand: string) {
//     this.brand = brand;
//   }
//   public startEngine(): void {
//     console.log(`${this.brand}: Engine started`);
//   }
// }
// let myCar = new Car ('Toyota')
// myCar.startEngine()
//////////////////////////////////// Private и Public
// class Car {
//     private brand: string; 
//     constructor(brand: string) {
//       this.brand = brand;
//     }
//     private startEngine(): void {
//       console.log(`${this.brand}: Engine started`);
//     }
//     public drive(): void {
//         this.startEngine();
//         console.log(`${this.brand}: Car is driving`);    
//     }
//   }
//   let myCar = new Car ('Toyota');
//   myCar.drive();// выводит "Toyota: Engine started" и "Toyota: Car is driving"
//   myCar.startEngine();// Выводит ошибку т.к startEngine() - приватный метод недоступный вне класса
/////////////////////////// Protected
//   class Dox {
//     protected speed: number
//     constructor(speed: number) {
//         this.speed = speed
//     }
//     protected move(): void {// метод доступен внутри класса, а также при наследовании
//         console.log(`Moving at speed: ${this.speed}`);
//     }
//   }
//   class Car extends Dox{
//     private brand: string; 
//     constructor(brand: string, speed: number) {
//         super(speed)
//         this.brand = brand;
//     }
//     private startEngine(): void {
//         console.log(`${this.brand}: Engine started`);
//     }
//     public drive(): void {
//         this.move();// метод доступен т.к наследуется от Dox
//         console.log(`${this.brand}: Car is driving`);    
//     }
//   }
//   let myCar = new Car('Toyota', 60)
//   myCar.drive() // выводит "Moving at speed: 60" и "Toyota: Car is driving"
/////////////////////////////////// Свойства класса
//   class Car {
//     private _brand: string; 
//     constructor(brand: string) {
//         this._brand = brand;
//     }
//     get brand () {// вызывается когда хотим просто посмотреть без изменений
//         return this._brand
//     }
//     set brand(newBrand: string) { // вызывается когда хотим что-то изменить
//         if(newBrand.length > 0) {
//             this._brand = newBrand
//         } else {
//             console.log('Brand name should not be empty');
//         }
//     }
//     private startEngine(): void {
//         console.log(`${this._brand}: Engine started`);
//     }
//     public drive(): void {
//         console.log(`${this._brand}: Car is driving`);    
//     }
//   }
//   let myCar = new Car('Toyota')
//   console.log(myCar.brand); // выведет 'Toyota'[срабатывает get]
//   myCar.brand = 'Ford' // [сработает set]
//   console.log(myCar.brand); // выведет "Ford"
//   myCar.brand = ""; // выведет 'Brand name should not be empty'
//   myCar.drive()
