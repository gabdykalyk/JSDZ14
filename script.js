// TASK 1
function week() {
    let dayNumber;
    dayNumber = prompt("Какой сегодня по счёту день?");
    switch (dayNumber) {
        case '1':
            dayName = "Понедельник";
            break;
        case '2':
            dayName = "Вторник";
            break;
        case '3':
            dayName = "Среду";
            break;
        case '4':
            dayName = "Четверг";
            break;
        case '5':
            dayName = "Пятница";
            break;
        case '6':
            dayName = "Суббота";
            break;
        case '7':
            dayName = "Воскресенье";
            break;
        default:
            dayName = "Неизвестный день недели";
    }
    return dayName;
}

console.log(week());


// TASK2
function evenOdd() {
    let result;
    let number = prompt('Введите число');
    if (Number.isInteger(Number(number))) {
        if (number % 2 === 0) {
            result = `${number} чётное число`;
        } else {
            result = `${number} нечётное число`
        }
    } else {
        console.log(`Ошибка, ${number} не является целым числом`)
    }
    console.log(result)
}

evenOdd()

// TASK 3
function power() {
    let a = prompt("Введите число")
    let b = prompt("В какую степень вы бы хотели его возвести?")
    let result;
    if (typeof Number(a, b) === 'number' && Number.isInteger(Number(b)) && !Number.isNaN(Number(a))) {
        result = a ** b;
    } else {
        result = "Вы ввели неверные данные";
    }
    console.log(result)
}

power()

// TASK 4
function canDivide() {
    let result;
    let a = prompt('Введите первое число');
    let b = prompt("Введите второе число")
    if (typeof Number(a, b) === 'number' && !Number.isNaN(Number(a)) && !Number.isNaN(Number(b)) && Number.isFinite(a / b)) {
        if (a % b === 0) {
            result = `${a} делится на ${b}, получаем ${a / b}`;
        } else {
            result = `${a} делится на ${b} с остатком`
        }
    } else {
        console.log(`Ошибка, неверные данные`)
    }
    console.log(result)
}

canDivide()

// TASK 5
function random() {
    let a = Number(prompt("Введите первое число"));
    let b = Number(prompt("Введите второе число"));
    let min;
    let max;
    let result;
    function RandomNumber() {
        result = min + Math.random() * (max - min);
        console.log(Math.round(result))
    }
    if (typeof (a, b) === 'number' && !Number.isNaN(a) && !Number.isNaN(b)) {
        if (a < b) {
            min = a;
            max = b;
            RandomNumber()
        } else if (a > b) {
            min = b;
            max = a;
            RandomNumber()
        } else {
            console.log("Числа равны")
        }
    } else {
        console.log("Ошибка, вы не ввели два числа")
    }

}

random()

// TASK6
function isYearLeap() {
    let year = Number(prompt("Введите год"));
    let result;
    if (Number.isInteger(year)) {
        if ((year % 4 === 0 && !(year % 100 === 0)) || (year % 400 === 0)) {
            result = `${year} год является високосным`
        } else {
            result = `${year} не високосный`;
        }
    } else {
        result = "Вы не ввели число"
    }
        
    console.log(result)
}

isYearLeap()

//TASK 7
function bank() {
    let n = Number(prompt("Сколько рублей хотите вложить?"));
    let year = Number(prompt("Сколько лет будете хранить?"));
    if (Number.isInteger(n) && (Number.isInteger(year))) {
        let i = 0;  
        while (i < year) {
            n = n + n * 0.1
            i++
        }
        console.log(n)
    } else {
        console.log("Ошибка, вы не ввели числа")
    }
}

bank()

// TASK8
function area() {
    let a, b, r, result;
    function rectangle() {
        result = a * b;
        console.log(`Площадь прямоугольника ${result}`)
    }

    function triangle() {
        result = a * b * 0.5;
        console.log(`Площадь треугольника ${result}`)
    }

    function circle() {
        result = Math.PI * r ** 2;
        console.log(`Площадь круга ${result}`)
    }

    let name = prompt("Выберите: прямоугольник, треугольник или круг")
    if (name === "прямоугольник") {
        a = parseFloat(prompt("Чему равна его длина?"));
        b = parseFloat(prompt("Чему равна его ширина?"));
        if ((typeof a === 'number' && !Number.isNaN(a)) && (typeof b === 'number' && !Number.isNaN(b))) {
            rectangle()
        } else {
            result = "Ошибка, вы не ввели числа"
        }
    } else if (name === "треугольник") {
        a = parseFloat(prompt("Чему равна его длина?"));
        b = parseFloat(prompt("Чему равна его ширина?"));
        if ((typeof a === 'number' && !Number.isNaN(a)) && (typeof b === 'number' && !Number.isNaN(b))) {
            triangle()
        } else {
            result = "Ошибка, вы не ввели числа"
        }
    } else if (name === "круг") {
        r = parseFloat(prompt("Чему равен его радиус"))
        if ( typeof r === 'number' && !Number.isNaN(r) ) {
            circle()
        } else {
            result = "Ошибка, вы не ввели числа"
        }
    } 

}

area()