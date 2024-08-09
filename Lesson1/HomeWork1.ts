let boolean1: boolean = true;
let boolean2: boolean = false;

boolean1 = 1; // не получилось присвоить число т.к при обЪявлении указали для переменной тип boolean, а boolean нельзя присвоить тип число
boolean2 = true; // получилось присвоить true т.к true это boolean

let number1: number = 2;
let number2: number = 2.5;

number1 = "5"; //  не получилось присвоить строку т.к при обЪявлении указали для переменной тип number, а string нельзя присвоить типу number
number2 = 5; // получилось присвоить значение т.к значение соответствует типу number при обЪявлении переменной

let string1: string = "Hello!";
let string2: string = "TypeScript";

string1 = 1; // не получилось присвоить число т.к при обЪявлении указали для переменной тип string, а number нельзя присвоить типу string
string2 = "React"; // получилось присвоить значение т.к значение соответствует типу string при обЪявлении переменной


let nullValue: null = null;
let undefinedValue: undefined = undefined;

nullValue = undefined;// не получилось присвоить undefined т.к при обЪявлении указали для переменной тип null, а undefined нельзя присвоить типу null
undefinedValue = undefined; // получилось присвоить значение т.к значение соответствует типу null при обЪявлении переменной

const someFunc = ():void => { // Не показывает ошибку т.к void используется когда функция ничего не возвращает
    console.log('Some text');
    
}

const someFunc2 = ():void => { // Показывает ошибку т.к нельзя применять void когда функция что-то возвращает. В данном случаи вовращается тип string
    return "Some text";
}