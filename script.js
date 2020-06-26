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
