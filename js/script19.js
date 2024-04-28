"use strict"

// Zadacha 1

// let userInfo = {
//     name: 'Коля',
//     age: 30,
// }

// delete userInfo.name
// delete userInfo.age
// console.log(userInfo);


//Zadacha 2.


// let userInfo = {
//     name: 'Коля',
//     age: 30,

// }
// if ('name' in userInfo) {
//     console.log(true);
// } else {
//     console.log('Нет такого ключа!!!!');

// }

//Zadacha 3.

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (const key in student) {
//     console.log(key);
// }
// for (const key in student) {
//     console.log(student[key]);
// }

//Zadacha 4.

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// }

// console.log(colors['ru pum pu ru rum'].red);
// console.log(colors['ru pum pu ru rum'].green);


// Zadacha 5.

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     igor: 664,
//     alexandra: 199
// }
// let srednZP = (salaries.andrey + salaries.sveta + salaries.anton + salaries.igor + salaries.alexandra) / 5

// console.log(srednZP);


// Zadacha 6.

// const login = prompt('Укажите логин для регистрации!');
// const passw = prompt('Укажите пароль для регистрации!');
// const userInfo = {};
// userInfo.name = login;
// userInfo.passw = passw;
// // console.log(userInfo);
// // console.log(login);
// // console.log(passw);
// const loginCheck = prompt('Подтвердите логин для проверки');
// const passwCheck = prompt('Подтвердите пароль для проверки!');
// if (login === loginCheck && passw === passwCheck) {
//     alert('Добро пожаловать!!!');
// } else {
//     alert('Логин или пароль введены неверно!!!')
// }

// Zadacha 1.1

// Мы на футбольном матче, счет забитых голов одной команды не может
// превышать 9 мячей. Жаль что нам присылают результат матча в формате
// «2:5», ведь нам надо это вывести в консоль словами. Давайте напишем
// программу, которая будет за нас переводить формат и выводить результат в
// консоль.



// Zadacha 1.2

// let student1 = {
//     name: 'Polina',
//     age: 27,
// }
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

// if (student1.name === student2.name && student1.age === student2.age) {
//     console.log('Объекты одинаковые!!!');
// } else {
//     console.log('Упс!!! Что-то пошло не так!!!');
// }

// Zadacha 1.3

// У нас есть объект с животными. Наша задача узнать имя птицы и вывести его в
// консоль. Но произошла ошибка и в этом объекте нет птицы. Если попробуем
// узнать имя мы получим ошибку. Задача придумать, как обратиться к
// несуществующему объекту и не получить ошибку, чтобы наша программа
// // работала дальше.


// const animals = {
//     cat: {
//         name: 'Енчик',
//         age: 3,
//     },
//     dog: {
//         name: 'Орео',
//         age: 2,
//     },
//     bird: {
//         name: 'Орео',
//         age: 2,
//     }
// }
// for (const key in animals) {
//     if (String(Object.keys(animals)) === 'bird') {
//         console.log(animals.bird.name)
//     }
//     console.log('Птиц нет!')

// }
// console.log(animals)


