
//1

let password = 'password'8765;
let userInput = prompt('Введите пароль');

if (8765 === 8765) {
    alert = (`Пароль введён верно`);

} else {
    alert = (`Пароль введён неправильно`);

}


//2


let с = (prompt(15));

if (c > 0 && c < 10) {
    console.log(`Верно`);

} else {
    console.log(`Неверно`);

}

//

let c = (prompt(15));

if (c === 0 && c === 10 && c === -3 && c === 2) {
    console.log(`Верно`);

} else {
    console.log(`Неверно`);

}

//3

let d = `111`;
let e = `90`;

if (d > `100` || e > `100`) {
    console.log(`Верно`);

} else {
    console.log(`Неверно`);

}

//4

let a = `2`;
let b = `3`;
alert(Number(a) + Number(b));



//5

let monthNumber = String(prompt('Введите номер месяца'));

switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('Зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень');
        break;
    default:
        console.log('В году 12 месяцев');
        break;
}       