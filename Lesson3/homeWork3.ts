// 1.

// enum DaysOfWeek {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }

// console.log(DaysOfWeek.Monday);
// console.log(DaysOfWeek.Tuesday);
// console.log(DaysOfWeek.Wednesday);
// console.log(DaysOfWeek.Thursday);
// console.log(DaysOfWeek.Friday);
// console.log(DaysOfWeek.Saturday);
// console.log(DaysOfWeek.Sunday);

// 2. 

// enum Months {
//     Январь = 1,
//     Февраль,
//     Март,
//     Апрель,
//     Май,
//     Июнь,
//     Июль,
//     Август,
//     Сентябрь,
//     Октябрь,
//     Ноябрь,
//     Декабрь
// }

// let months = (numb:number) => {
//     return Months[numb];
// }

// console.log(months(12));

// 3.

// enum Colors {
//     красный = 1,
//     синий,
//     желтый,
//     зеленый
// }

// let colors = (col: string): void => {
//     console.log(`Выбран ${col} цвет`);
// }

// colors(Colors[4]);

// 4.

// enum Planets {
//     Меркурий = 1,
//     Земля,
//     Марс,
//     Юпитер,
//     Сатурн,
//     Уран,
//     Нептун,
//     Венера
// }

// let sequenceNumb = (planet:string) => {
//     return Planets[planet];
// }

// console.log(Planets['Марс']);
// console.log(Planets['Венера']);

// 5.

enum Fruits {
    Яблоко = 1,
    Банан,
    Апельсин, 
    Груша,
    Виноград
}

let isFruits = (fruit:string) => {
    for (let i = 1; i <= 5; i++) {
        if (Fruits[i] === fruit){ // Не выполняется if
            return "Этот фрукт вкусный!";
        } else {
            return "Неизвестный фрукт!";
        }
    }
}

console.log(isFruits('Черника'));
console.log(isFruits('Банан'));