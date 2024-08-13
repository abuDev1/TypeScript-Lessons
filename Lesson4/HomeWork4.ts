// 1.

// let sayHello = (name: string) => `Say ${name}`;

// console.log(sayHello('Hello!'));

// 2.

// let addNumbers = (num1: number, num2: number) => num1 + num2;

// console.log(addNumbers(2,15));

// 3.

// type Person = {
//     firstName: string,
//     lastName: string,
//     age: number
// }

// let personValues: Person = {
//     firstName: "Са1ид",
//     lastName: 'Бадуев',
//     age: 76
// }

// let getFullName = (person: Person) => `${person.firstName} ${person.lastName}, ${person.age} лет`;

// console.log(getFullName(personValues));

// 4.

// type Point = {
//     x: number,
//     y: number
// }

// let distanceValue: Point = {
//     x: 70,
//     y: 50
// }

// let getDistance = (arg1: Point, arg2: Point) => arg1.x - arg2.y;

// console.log(getDistance(distanceValue, distanceValue));

// 5.

// function filterByType(array: any[], type: string): any[] {
//     return array.filter(item => typeof item === type);
// }


// console.log(filterByType([1, 'hello', true, 42, 'world', false, { name: 'Alice' }, [1, 2, 3], null, undefined], 'number')); // [1, 42]