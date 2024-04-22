"use strict"

// Zadacha 1

// function getSum(number5) {
//     let sum1 = 0;
//     for (let i = 1; i <= number5; i++) {
//       sum1 += i;
//     }
//     return sum1;
// }

// console.log(getSum(100));

//Zadacha 2.

// function sumPereplaty(sumKredita) {
//     return sumKredita * 0.17 * 5
// }
// alert(`Сумма переплат составит - `+ sumPereplaty(prompt('Введите сумму кредита!')));

//Zadacha 3.
// function trimString(string1, num1, num2) {
//     return string1.slice(num1, num2);
// }
// console.log(trimString('Делаю навесы под заказ качественно!!!!', 5, 22));

//Zadacha 4.

// function getSumNumbers(number) {
//     let str = String(number);
//     let strSum = 0
//     for (let i = 0; i < str.length; i++) {
//         strSum += Number(str[i]);
//     }

//     return strSum
// }

// console.log(getSumNumbers(1234));

// Zadacha 5.

// function getSum(a, b) {
//     if (a === b) {
//         return a
//     } else {
//         let strSum = 0
//         for (let i = a; i <= b; i++) {
//             strSum += i;
//         }

//         return strSum
//     }

// }
// console.log(getSum(-2, 1));

// Zadacha 6.


// function fooBoo(string, foo, Boo) {
//     if (string) {
//         return foo()
//     } else {
//         return Boo()
//     }
// }

// function foo() {
//     console.log('foo');
// }
// function boo() {
//     console.log('boo');
// }

// console.log(fooBoo('code', foo, boo));

// Zadacha 1.1

// function treugol(a, b, c) {
//     if (a + b > c) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// treugol(3, 4, 5)

// Zadacha 1.2

// function lomaemShokolad(a, b) {
//     let c 
//     if (typeof a == 'number' || a > 0 || typeof b == 'number' || b > 0) {
//         return c = a - 1 + b - 1
//     } else {
//         return '0'
//     }
// }
// alert('Ломаем шоколад ' + lomaemShokolad(20, 21) + ' раз!!!');

// Zadacha 1.3

// Напишите программу для вычисления общей стоимости покупки телефонов.Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов. После того как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её. Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять, можете вы себе это позволить или нет. Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», так же как и переменную для вашего «баланса банковского счета».
// Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.
// Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(...) . Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны


const formatPrice = (price) => {
  return `${price.toFixed(2)} $`;
};
function sumPokupki() {
  let balance = prompt("Введите сумму баланса", 0);
  let nalog = prompt("Введите сумму налога", 20);
  let priceTelef = 450;
  let priceAksesuarov = 70;
  let generalPrice = priceTelef + priceAksesuarov;
  let fullPrice = 0;

  while (fullPrice < balance) {
    if ((fullPrice + generalPrice) < balance) {
      fullPrice += generalPrice;
    } else break;
  }

  let fullPriceWithTax = fullPrice + fullPrice * (nalog / 100);
  alert(formatPrice(fullPriceWithTax));
  if (fullPriceWithTax < balance) {
    alert("Денег хватает");
  } else {
    alert("Денег не хватает!! Иди работай!!");
  }
}
sumPokupki();