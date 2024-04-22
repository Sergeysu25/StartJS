// // zadacha 1

// let a = 'true'
// let b = false
// let c = 17
// let d = undefined
// let i = null
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof i);

// // zadacha 2
// let height = 15
// let width = 20

// console.log(height);
// if (height < width)
// console.log(width);

// // zadacha 3

// let a1 =  1
// let b1 =  20
// console.log(a1, b1);
// for(let i = a1; i <= b1; i++) {
//     if (i % 3  == 0)  { 
//         console.log(i);
//     } 
// }

// // // zadacha 4

// let key = true
// let documents = true
// let pen = true
// let apple = false
// let orange = true

// let shouldGoToWork = 'Можем идти на работу с аппельсином!!!'
// if (key == true && documents == true && pen == true && (apple == false || orange == true)) {
//     console.log(shouldGoToWork);
// }

// // zadacha 5

// let i = Number(prompt('введите число'))
// console.log(i);
//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log('FizBuz');
//     }
//     else if (i % 5 == 0) { 
//         console.log('Fiz');
//     }  
//     else if (i % 3 == 0) {
//         console.log('Buz');
//     }

// zadacha 6
// let v = Number(prompt('введите возраст'))
// console.log(v);
//     if (v >= 18 ) {
//         console.log('Попей пивка');
//     }

//     else if (v < 18) { 
//         console.log('Пей колу');
//         if(v >=16) {
//             console.log('Можешь выкурить сигаретку, только маме не говори ');
//         }
//     }  

// zadacha 7

// let storona
// switch (prompt('введите сторону света(юг, север, запад, восток)')) {
//     case 'юг':
//         console.log('на юг пойдешь счастье найдешь');
//         break
//     case 'север':
//         console.log('на север пойдешь много денег найдешь');
//         break
//     case 'запад':
//         console.log('на запад пойдешь верного друга найдешь');
//         break
//     case 'восток':
//         console.log('на восток пойдешь разработчиком станешь');
//         break
//     default:
//         console.log(prompt('Неверное значение!!! Попробуйте ещё раз!(юг, север, запад, восток)'));
// }

// zadacha 1.1
// let name1 = prompt('введите имя')
// name2 = 'Привет, ' + (name1.toLowerCase())

// alert(name2)

// zadacha 1.2
// let d1 = Number(prompt('введите число'))
// let d2 = Number(prompt('сколько отнять'))
// let d3 = Number(prompt('сколько прибавить'))
// let d4 = Number(prompt('на сколько умножить'))
// let d5 = Number(prompt('на сколько разделить'))

// let rez = ((((d1 - d2) + d3) * d4) / d5)
// alert(rez)

// zadacha 1.3

// let g1 = '#'
// for (g1 = '#'; g1.length <= 6; g1 = g1 + '#') {
//     console.log(g1);
// }