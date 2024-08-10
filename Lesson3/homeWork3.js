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
// var Fruits;
// (function (Fruits) {
//     Fruits[Fruits["\u042F\u0431\u043B\u043E\u043A\u043E"] = 1] = "\u042F\u0431\u043B\u043E\u043A\u043E";
//     Fruits[Fruits["\u0411\u0430\u043D\u0430\u043D"] = 2] = "\u0411\u0430\u043D\u0430\u043D";
//     Fruits[Fruits["\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D"] = 3] = "\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D";
//     Fruits[Fruits["\u0413\u0440\u0443\u0448\u0430"] = 4] = "\u0413\u0440\u0443\u0448\u0430";
//     Fruits[Fruits["\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434"] = 5] = "\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434";
// })(Fruits || (Fruits = {}));
// var isFruits = function (fruit) {
//     for (var i = 1; i <= 5; i++) {
//         if (Fruits[i] === fruit) {
//             return "Этот фрукт вкусный!";
//         }
//         else {
//             return "Неизвестный фрукт!";
//         }
//     }
// };
// console.log(isFruits('Черника'));
// console.log(isFruits("Банан"));
