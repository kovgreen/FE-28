// Написати програму яка отримає від користувача число (кількість хвилин) і виведе на
// екран строку в форматі години і хвилини
// 70 покаже 1:10
// 450 покаже 7:30
// 1441 покаже 24:1
// const amount = 70;
// const hours = Math.floor(amount / 60);
// const minutes = amount % 60;
// console.log(hours);
// console.log(minutes);
// console.log(`${hours}:${minutes}`);

// Написат програму яка запитує в користувача 3 числа і виводить їх впорядку спадання
// Наприклад користувач ввів 0, -3, 41 на екрані побачимо 41, 0, -3

// const x = 0,
//   y = -3,
//   z = 41;

// if (x > y && x > z) {
//   if (y > z) {
//     console.log(`${x}, ${y}, ${z}`);
//   } else {
//     console.log(`${x}, ${z}, ${y}`);
//   }
// } else if (y > x && y > z) {
//   if (x > z) {
//     console.log(`${y}, ${x}, ${z}`);
//   } else {
//     console.log(`${y}, ${z}, ${x}`);
//   }
// } else {
//   if (x > y) {
//     console.log(`${z}, ${x}, ${y}`);
//   } else {
//     console.log(`${z}, ${x}, ${y}`);
//   }
// }

// Написати програму яка буде вираховувати вартість нового даху для будинку
// Вартість нового даху складається з:
// 1) Вартість роботи
// 2) Вартість покрівлі
// 3) Площу даху
// Програма має вміти виконувати наступні функції.
// 1) Користувач може вказати тип даху який у нього на будинку.
// 2) Користувач може вибрати матеріал покрівлі
// 3) Користувач може вибрати хто буде виконувати роботу по монтажу
// 4) В кінці покаже користувачу вікно з загальною сумою

// Є існує чотири типа даху
// 1) Односкатний (прямокутник)
// 2) Двухскатний (2 прямокутника)
// 3) Шатровий (4 однакових трикутника)
// 4) Плаский (квадрат)
// Користувач вибирає тип ввівши цифру 1-4
// Після вибору типу даху потрабно запросити в користувача розміри сторін для розрахунку площі

// Для вибору доступні 3 вида матеріалу для покрівлі
// 1) Металочерепиця (217.88 за м2)
// 2) Керамічна черепиця (351.01 м2)
// 3) Єврошифер (203.5 м2)
// Користувач вибирає матеріал ввівши цифру 1-3

// Користувач може вибрати з чотирьох варіантів виконавців робіт
// 1) Закордона бригада (500 за м2)
// 2) Бригада з міста (256 за м2)
// 3) Бригада з сусіднього села (115 за м2)
// 4) Самостійно зробити монтаж (0 за м2)
// Користувач вибирає працівників ввівши цифру 1-4
// Всі данні які користувач буде вводити перевіряти на те чи є вони числом, цілим числом, додатнім числом
// http://shifaurman.ru/a/shifaleurman/files//userfiles/images/%D1%82%D0%B8%D0%BF%D1%8B%20%D0%BA%D1%80%D1%8B%D1%88%203.jpg
// Формула Герона
// Math.sqrt()

/*
1) Попросимо користувача вибрати тип даху ('Вибери тип даху (1 - Односкатний, 2 - Двохскатний, 3 - Шатровий, 4-Плаский)')
2) В залежності від форми запрошуємо данні про розміри сторін в користувача\
3) Попросимо користувача вибрати матеріал
4) Попросимо в коритувача вибрати тип працівників
*/
