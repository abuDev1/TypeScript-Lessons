/////////////////////////////////// type Array

// Первый способ определения массива
let number: number[] = [1,2,3,4,5];

// Второй способ определения массива
let List: Array<number> = [1,2,3,4]; // дженерик тип

////////////////////////////////// Type Tuple

// 1й способ

let x: [string, number];

x = ['Hello', 10];

// 2й способ

let y: [string, number] = ['Yanki', 20];

/////////////////////////////////// Type Any

let o: [any, any] = ["yohan", 20];
let z: Array<any> = [10, "hello"];

let g: any = 'Hi'
g = 44;
g = false;
g = 'fffff'

/////////////////////////////////// type Enum [можно сказать смесь массива и объекта]

enum Side {
    Up, // соответствует индексу 0
    Down, // соответствует индексу 1
    Left, // соответствует индексу 2
    Right // соответствует индексу 3
}

Side.Up // 0
Side.Down // 1
Side.Left // 2
Side.Right // 3

enum Sides {
    Up = 2, // изменили индекс на 2
    Down = 3,// изменили индекс на 3 и тд
    Left = 4,
    Right
}

Sides.Up // 2
Sides.Down // 3
Sides.Left // 4
Sides.Right // 5

////////////////////////////////////// Type never

const message = "hello";

const error = (msg: string): never => { // функция, которая возвращает раз за разом что-то
    throw new Error(msg)
}

const infinityLoop = (): never => { // функция, которая работает в бесконечном цикле
    while(true) {

    }
}

////////////////////////////////////// type Object

const created = (o: object | null): void => { // created принимает в себя аргумент 'o' в виде object ИЛИ null

}

created(1)
created("Hi")
created({obj:1})
created(null)

let id: number | string;

id = 10;
id = '33';
id = true

/////////////////////////////////////// type 'Type'

type Name = string;

let Id: Name;

Id = 'HHHH'
Id = 10

//

type toDo = {
    id: number,
    name: string,
    cardNumber: number[]
}

let toDos: toDo = {
    id: 10,
    name: "Khalid",
    cardNumber: [3242441]
}