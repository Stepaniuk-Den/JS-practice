// ========================================
// Створити код який буде повертати масив з жіночими іменами

// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];
// const men = ["Artem", "Maksim", "David", "Roman"];

// const women = [];

// for (let el of users) {
//   if (!men.includes(el)) {
//     console.log(el);
//     women.unshift(el);
//   }
// }
// console.log(women);

// ==========================================
// //Створіть функцію, яка приймає 1 параметр
// //1 масив імен користувачів, які поставили лайки.
// //Функція повертає меседж, як вказано у прикладах:
// //Використовувати switch()

// function stringBuilder(users) {
//   let message;
//   switch (users.length) {
//     case 0:
//       message = "no one likes this";
//       break;
//     case 1:
//       message = `${users[0]} likes this`;
//       break;
//     case 2:
//       message = `${users[0]} and ${users[1]} like this`;
//       break;
//     case 3:
//       message = `${users[0]}, ${users[1]} and ${users[2]} like this`;
//       break;

//     default:
//       message = `${users[0]}, ${users[1]} and ${
//         users.length - 2
//       } others like this`;

//       break;
//   }
//   return message;
// }

// console.log(stringBuilder([])); //"no one likes this";
// console.log(stringBuilder(["Peter"])); //"Peter likes this";
// console.log(stringBuilder(["Jacob", "Alex"])); //"Jacob and Alex like this";
// console.log(stringBuilder(["Max", "John", "Mark"])); //"Max, John and Mark like this";
// console.log(stringBuilder(["Alex", "Jacob", "Mark", "Max"])); //"Alex, Jacob and 2 others like this;

// =========================================

//Напишіть функцію для перетворення імені в ініціали. Ви отримаєте ім'я з прізвищем розділені пробілом. В результаті це має виглядати так:
// `Sam Harris => S.H``Patrick Feeney => P.F`;

// 1st variant
// function abbrevName(name) {
//   const first = name.split(" ");
//   return `${first[0][0]}. ${first[1][0]}`;
// }

// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feeney"));

//2nd variant
// function abbrevName(name) {
//   const first = name.split(" ");

//   return `${first[0].slice(0, 1)}. ${first[1].slice(0, 1)}`;
// }

// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feeney"));

//3nd variant
// function abbrevName(name) {
//   const first = name.split(" ");
//   for (i = 0; i < first.length; i++) {
//     first[i] = first[i].slice(0, 1);
//   }

//   return first.join(".");
// }

// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feeney"));

//================================================

//Порахуй суму чисел, які були передані аргументом у вигляді набору значень
// Виклич функції для перевірки працездатності твоєї реалізації.
// function countSum() {
//   const arr = Array.from(arguments);
//   let result = 0;
//   for (const el of arr) {
//     result += el;
//   }
//   return result;
// }

// console.log(countSum(1, 2, 3, 4, 5, 6)); // 21
// console.log(countSum(32, 8, 5, 6, 9)); // 60

//=================================================

//Порахуй скільки голосних букв у реченні.
// 1st variant
// function countVowel(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let sum = 0;
//   const arr = str.toLowerCase().split("");
//   for (const el of arr) {
//     if (vowels.includes(el)) {
//       sum += 1;
//     }
//   }
//   return sum;
// }
// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("knowlage is a power")); // 7
// console.log(countVowel("Junior Web Developer")); // 8
// console.time(`Test`);
// console.timeEnd(`Test`);

// 2nd variant
// function countVowel(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let sum = 0;
//   const arr = str.toLowerCase();
//   for (let i = 0; i < arr.length; i++) {
//     if (vowels.includes(arr[i])) {
//       sum += 1;
//     }
//   }
//   return sum;
// }
// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("knowlage is a power")); // 7
// console.log(countVowel("Junior Web Developer")); // 8

//=====================================

// const user = {};
// user.name = "alina";
// user["city"] = "odessa";
// // user["sayHello"] = function () {
// //   console.log(`Hello, my name is ${this.name}, I'm from ${this.city}.`);
// // };

// // user.sayHello();

// // for (const key in user) {
// //   console.log(user[key]);
// // }

// const keys = Object.keys(user);
// // console.log(user);

// for (const key of keys) {
//   console.log(key, user[key]);
// }

//======================================

// // Напишіть функцію isBookAlreadyRead для відображення статусу читання (тобто відображення назви книги, імені автора та статусу читання) наступних книг.Наприклад "Already read " + "book" by author або "You still need to read " + "book" by author
// const library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];

// function isBookAlreadyRead(library) {
//   for (const book of library) {
//     book.readingStatus
//       ? console.log(`Already read '${book.title}' by ${book.author}.`)
//       : console.log(
//           `You still need to read '${book.title}' by ${book.author}.`
//         );
//   }
// }
// isBookAlreadyRead(library);

//============================================

// Обнови значення кожної властивості так, що перед сумою стояв знак долара.
// Виводь результат у форматі name: $salary

// //1st variant
// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// };
// const prefix = "$";
// for (key in salaries) {
//   salaries[key] = prefix + salaries[key];
// }
// console.log(salaries);

// // //2nd variant
// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// };
// // const keys = Object.keys(salaries);
// //==================keys===============
// for (const key of Object.keys(salaries)) {
//   salaries[key] = `$${salaries[key]}`;
// }
// console.log(salaries);

//========================================

// // 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// // 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// // 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   getStudentsList(nameFaculty) {
//     const names = [];
//     for (const student of this[nameFaculty]) {
//       names.push(student.name);
//     }

//     return names;
//   },

//   getStudentsPoints(quantityPoints) {
//     let total = 0;
//     for (const points of this[quantityPoints]) {
//       total += points.points;
//     }
//     return total;
//   },
// };
// console.log(hogvarts.getStudentsList("griffindor"));

// console.log(hogvarts.getStudentsPoints("sliserin"));

//==============================================================

// const user = {
//   name: "Den",
//   age: 43,
//   skills: {
//     html: true,
//     css: true,
//     js: true,
//   },
// };

// const copy = { ...user };
// copy.name = "Max";
// // copy.skills.js = false;
// console.log(user);
// console.log(copy);
// // JSON.parse(JSON.stringify())
// // Object.assign()

// //https://uk.javascript.info/recursion

// //Єдиний метод без використання бібліотек для ПОВНОГО клонування масиву
// function copyArr(arr) {
//   let res = [];
//   for (let i in arr) {
//     res.push(arr[i]);
//   }
//   return res;
// }
// //Єдиний метод без використання бібліотек для ПОВНОГО клонування об'єкту
// function copyObj(obj) {
//   const res = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       if (obj[key].length !== undefined) {
//         res[key] = copyArr(obj[key]);
//       } else {
//         res[key] = copyObj(obj[key]);
//       }
//     } else {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// }

// const deepClone = copyObj(user);
// console.log(deepClone);

// deepClone.skills.js = false;

// // Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName. Викоритовуй rest оператор.
// //==================================================rest====
// function transformUsername({ firstName, lastName, ...args }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     //===spread==
//     ...args,
//   };
// }
// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//   })
// );
// const user = {
//   id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
// }
// //=============================rest===(під час параметрів)
// const {firstName, lastName, ...props} = user;
// //===============spread===============(під час аргументів)
// const user2 = {...props};

//============================================================

// // 1 Створити функцію яка буде приймати 2 параметри
// //    1 параметр масив
// //    2 параметр назва книги
// // Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// // 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];
// function getUsers(arr, bookName) {
//   let users = [];
//   for (const { name, books } of arr) {
//     if (books.includes(bookName)) {
//       users.push(name);
//     }
//   }
//   return users.join(", ");
// }

// function getAge(arr) {
//   let total = 0;
//   for (const {age} of arr) {
//     if (age) {
//       total += age;
//     }
//   }
//   return total;
// }

// console.log(getAge(friends));
// console.log(getUsers(friends, "Harry Potter"));

//=============================================================

// // Потрібно створити функцію яка буде приймати 2 параметри
// // 1  значення від якої суми робити пошук
// // 2  значення до якої суми робити пошук
// // Повертає список автомобілів які підпадають під наш пошук

// const cars = [
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];
// function search(start, end) {
//   let arr = [];
//   for (const { model, type, price } of cars) {
//     if (price <= end && price >= start) {
//       arr.push(`${model} ${type}`);
//     }
//   }
//   return arr;
// }
// console.log(search(20000, 40000));

//==============================HOMEWORK 41/3mod===================

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   //Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const potionIndex = this.potions.findIndex(
//       (el) => el.name === newPotion.name
//     );
//     if (!!~potionIndex) {
//       //~ побітове перетворення
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },

//   // addPotion(newPotion) {
//   //   const { name, price } = newPotion;
//   //   for (let i = 0; i < this.potions.length; i += 1) {
//   //     if (this.potions[i].name === newPotion.name) {
//   //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//   //     }
//   //   }

//   //   this.potions.push(newPotion);
//   // },

//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex((el) => el.name === potionName);
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     this.potions.splice(potionIndex, 1);
//   },

//   //   removePotion(potionName) {
//   //     for (let i = 0; i < this.potions.length; i++) {
//   //       const { name } = this.potions[i];
//   //       if (name === potionName) {
//   //         this.potions.splice(i, 1);
//   //return;
//   //       }
//   //     }
//   //     return `Potion ${potionName} is not in inventory!`;
//   //   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.findIndex((el) => el.name === oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     this.potions[potionIndex].name = newName;
//     // this.potions.splice(potionIndex, 1, newName);
//   },

//   // updatePotionName(oldName, newName) {
//   //   for (const item of this.potions) {
//   //     if (item.name === oldName) {
//   //       item.name = newName;
//   //       return;
//   //     }
//   //   }
//   //   return `Potion ${oldName} is not in inventory!`;
//   // },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );

//=================================================================

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [
//   {
//     id: "apple",
//     qty: 1,
//   },
//   {
//     id: "lemon",
//     qty: 2,
//   },
//   {
//     id: "banana",
//     qty: 3,
//   },
//   {
//     id: "apple",
//     qty: 6,
//   },
//   {
//     id: "apple",
//     qty: 8,
//   },
//   {
//     id: "lemon",
//     qty: 19,
//   },
//   {
//     id: "pineapple",
//     qty: 1,
//   },
// ];

//1st variant=======================================
//function getUnic(products){
// for (let i = 0; i < products.length; i++) {
//   for (let j = i + 1; j < products.length; j++) {
//     if (products[i].id === products[j].id) {
//       products[i].qty += products[j].qty;
//       products.splice(j, 1);
//       j -= 1;
//     }
//   }
//   console.log("current", products[i]);
// }
//}
//getUnic(products);
//2nd variant=======================================
// function getUnic2(products) {
//   for (let i = 0; i < products.length; i += 1) {
//     for (let j = products.length - 1; j > i; j -= 1) {
//       if (products[i].id === products[j].id) {
//         products[i].qty += products[j].qty;
//         products.splice(j, 1);
//       }
//     }
//     console.log("current", products[i]);
//   }
// }
// getUnic2(products);
// console.log(products);

//=================================================
// //Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
// //1 глибина колодязя (depth)

// //Функція повертає кількість днів

// // Умови:
// // вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// // використовувати цикл while()

// function calcDays(depth) {
//   const daySpeed = 7;
//   const nightSpeed = 2;

//   let days = 0;
//   let totalWay = 0;
//   while (totalWay < depth) {
//     days += 1;
//     totalWay += daySpeed;
//     if (totalWay < depth) {
//       totalWay -= nightSpeed;
//     }
//   }

//   console.log(days);
// }
// calcDays(42); //виповзе за 8 днів
// calcDays(17); //виповзе за 3 дні
// calcDays(18); //виповзе за 4 дні

//
//=======================================

// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}
// function fn(buyers, cases) {
//   const obj = {};
//   for (let i = 1; i <= cases; i += 1) {
//     obj[i] = 0;
//   }
//   for (const buyer of buyers) {
//     const values = Object.values(obj);
//     const min = Math.min(...values);
//     const idx = values.indexOf(min) + 1; //компенсація індексу до каси 0:1
//     obj[idx] += buyer;
//   }
//   return obj;
// }
// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));

//===============================================
// // Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість раз яку вона дублюється буде значенням ключа
// // const str = 'absdabsrgbadgtdswwbetflg';
// // Результат на який очікуємо
// // const obj = {
// //     a: 3,
// //     b: 4,
// //     s: 2,
// //     // ...
// // }
// const str = "absdabsrgbadgtdswwbetflg";

// function values(str) {
//   const obj = {};
//   const arr = str.split("");
//   for (let key of arr) {
//     if (obj[key]) {
//       obj[key] += 1;
//     } else {
//       obj[key] = 1;
//     }
//   }
//   console.log(obj);
// }

// values(str);

//==================================================

// // Напишіть наступні функції:
// // createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// // logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// // logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   // callback(product);
//   console.log(callback);
// }

// function logProduct(goods) {
//   console.log(goods);
// }

// function logTotalPrice({ quantity, price }) {
//   console.log(quantity * price);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

//======================================================

// // В об'єкта account є методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.
// // Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
// // Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 1000,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Шановний ${this.username}, перевищено ліміт транзакції ${TRANSACTION_LIMIT}`
//       );
//     } else if (amount > this.balance) {
//       onError(
//         `Шановний ${this.username}, перевищений баланс ${this.balance} на рахунку`
//       );
//     } else {
//       this.balance -= amount;
//       onSuccess(
//         `Шановний ${this.username}, вдала транзакція, залишок на рахунку ${this.balance}`
//       );
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount >= TRANSACTION_LIMIT) {
//       onError(
//         `Шановний ${this.username}, перевищено ліміт транзакції ${TRANSACTION_LIMIT}`
//       );
//     } else if (amount <= 0) {
//       onError(`Шановний ${this.username}, сума транзакції має бути більше 0`);
//     } else {
//       this.balance += amount;
//       onSuccess(
//         `Шановний ${this.username}, вдала транзакція, залишок на рахунку ${this.balance}`
//       );
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//======================================

// Створи стрілочну функцію logItems(), яка виводитьв консоль елементи масива, зроби перебір за допомогою методу forEach().

// const logItems = (arr) => {
//   arr.forEach((el, idx, arr) => {
//     console.log(idx + 1, el);
//   });
// };

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

//=======================================

// const calсulateAverage = (...args) => {
//   let average = 0;
//   args.forEach((el) => (average += el));
//   return average / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

//=======================================

// //Реалізувати функцію пошуку по товару, функція має повернути рядок в форматі назва товару + ціна
// //функція приймає один параметр ID товару
// const instruments = [
//   {
//     id: 1,
//     img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg",
//     name: "Молоток",
//     price: 150,
//   },
//   {
//     id: 2,
//     img: "https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg",
//     name: "Перфоратор",
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg",
//     name: "Рівень",
//     price: 2000,
//   },
// ];

// function findTools(toolId) {
//   let message = "Not found";
//   instruments.forEach(({ id, name, price }) => {
//     if (id === toolId) {
//       message = `${name} - ${price}`;
//     }
//   });
//   return message;
// }

// console.log(findTools(2));

//========================== 4/4 module ========================

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     return this.pizzas.includes(pizzaName)
//       ? onSuccess(pizzaName)
//       : onError(
//           `There is no pizza with a name ${pizzaName} in the assortment.`
//         );
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//================ супер задача на РЕКУРСІЮ =========================
// function findLargestNumber() {
//   let max;
//   for (const num of arguments) {
//     if (typeof num === "number") {
//       max = num;
//       break;
//     }
//   }
//   for (const num of arguments) {
//     if (typeof num === "number") {
//       if (num > max) {
//         max = num;
//       }
//     } else {
//       max = findLargestNumber(...num);
//       max = findLargestNumber(...num);
//       max = findLargestNumber(...num);
//     }
//   }
//   return max;
// }
// console.log(
//   findLargestNumber(1, 2, 67, [145, 34, 2, [765, 0, -3], 200, 5], 10)
// );

//=======================================================

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// Отримати масив імен всіх користувачів (поле name).

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Отримати масив імен користувачів за статтю (поле gender).

// const getUsersWithGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.name);
// };

// const getUsersWithGender = (users, gender) => {
//   return users
//     .filter(({ gender: genderName }) => genderName === gender)
//     .map(({ name }) => name);
// };

// console.log(getUsersWithGender(users, "male"));

// Отримати користувача (не масив) по email (поле email, він унікальний).

// const getUserWithEmail = (users, email) =>
//   users.find(({ email: userEmail }) => userEmail === email)?.name;
//   //?. оператор опціональної послідовності
//   //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}

// console.log(getUserWithEmail(users, "elmahead@oqwertymatom.com")); // {об'єкт користувача Elma Head}

//============================================
// Отримати загальну суму балансу (поле balance) всіх користувачів.

// const calculateTotalBalance = (users) =>
//   users.reduce((acc, { balance }) => acc + balance, 0);

// console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = (users) =>
//   users.reduce((acc, { balance = 0 }) => acc + balance, 0);

// console.log(calculateTotalBalance(users)); // 20916

//============================================

// Масив імен (поле name) людей, відсортованих залежно від кількості їх друзів (поле friends)

// const getNamesSortedByFriendsCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//=============================================
// Отримати масив усіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

// const getSortedUniqueSkills = (users) => {
//   return users
//     .flatMap(({ skills }) => skills)
//     .filter((el, idx, arr) => arr.indexOf(el) === idx)
//     .sort((a, b) => a.localeCompare(b));
// };

// console.log(getSortedUniqueSkills(users));

//===============================================
// // Виправ помилки, які будуть в консолі, щоб скрипт запрацював.
// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };
// // console.log(inventory.add.bind(inventory)("item name"));
// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

//===================================================
// Виправ помилки, які будуть в консолі, щоб скрипт запрацював.
// const car = {
//   registrationNumber: "GA12345",
//   brand: "Toyota",
// };
// function displayDetails(ownerName) {
//   console.log(
//     `${ownerName}, this is your car: ${this.registrationNumber} ${this.brand}`
//   );
// }

// const newCar = displayDetails.bind(car);
// newCar("Sofia");

//===================================================
// // Розстав відсутні this в методах об'єкта account.
// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

//====================================================
// Що виведеться в консоль?
// const directRoute = function (to = "Chop") {
//   console.log(`${this.from} => ${to}`);
// };

// const train1 = {
//   from: "Kyiv",
//   directRoute,
// };
// const train2 = {
//   from: "Lviv",
//   directRoute,
// };

// // directRoute.apply(train1, ["Vinnytsia"]);
// // directRoute.call(train1);
// // train2.directRoute();
// // train1.directRoute.call(train2, "Odessa");

// // const yourDirectRoute = directRoute.bind(train1);
// // yourDirectRoute();
// // yourDirectRoute("Kharkiv");

// // const theirDirectRoute = directRoute.bind(train2, "Poltava");
// // theirDirectRoute();
// // theirDirectRoute("Cherkasy");
// // theirDirectRoute.call(train1);

// const anotherDirectRoute = train1.directRoute;
// console.log(anotherDirectRoute());
//==================================================
// Що буде у консолі?
// const parent = {
//   name: "Luce",
//   age: 35,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Bob";
// child.age = 7;

// // console.log(child.name); // ?
// // console.log(child.age); // ?
// // console.log(child.heritage); // ?

// const child2 = Object.create(child);
// console.log(child2);
// console.log(child2.heritage);

// Напиши клас Client який створює об'єкт з властивостями login i email.Оголоси приватні властивості #login #email, доступ до яких зроби через геттер і сеттер login/email

// class Client {
//   #login;
//   #email;
//   constructor(newLogin, newEmail, newName) {
//     this.name = newName;
//     this.#login = newLogin;
//     this.#email = newEmail;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     if (newLogin) {
//       this.#login = newLogin;
//       return;
//     }
//     console.log("Error");
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (newEmail) {
//       this.#email = newEmail;
//       return;
//     }
//     console.log("Error");
//   }
//   get clientName() {
//     return this.newName;
//   }
//   set clientName(newName) {
//     if (newName) {
//       this.name = newName;
//       return;
//     }
//     console.log("Error");
//   }
// }

// const mango = new Client("mango_log", "mango@gmail.com", "Mango");
// console.log(mango.name);
// mango.name = "Mango2";
// console.log(mango.name);
//===========================================

// Напиши клас Client який створює об'єкт з властивостями login i email.Створити статичний метод і властивість підрахунку клієнтів під час їх створення

// class Client {
//   static total = 0;
//   static addClient() {
//     this.total += 1;
//   }
//   constructor(login, newEmail) {
//     this.login = login;
//     this.email = newEmail;

//     Client.addClient();
//   }
// }

// const mango = new Client("Mango", "mango@gmail.com");
// console.log(Client.total);
// console.log(mango);
//=============================================
// class User {
//   constructor(newName, newPassword, newEmail) {
//     this.name = newName;
//     this.password = newPassword;
//     this.email = newEmail;
//   }
//   changeName(newName) {
//     if (newName && newName.length >= 3) {
//       this.name = newName;
//     }
//   }
// }

// class Human extends User {
//   constructor(newName, newPassword, newEmail, damage) {
//     super(newName, newPassword, newEmail);
//     this.damage = damage;
//   }
//   attack() {
//     console.log(`${this.name} deals damage ${this.damage}`);
//   }
// }

// class Elf extends User {
//   constructor(newName, newPassword, newEmail, mana) {
//     super(newName, newPassword, newEmail);
//     this.mana = mana;
//   }

//   spell() {
//     console.log(`AVADAKEDAVRA spell cost ${this.mana}`);
//   }
// }

// const human = new Human("Max", "qwerty", "max@gmail.com", 1000);
// const legolas = new Elf("Lego", "qwert", "lego@gmail.com", 300);
// console.log(human);
// console.log(legolas);
// human.changeName("Alex");
// console.log(human);
//====================================
// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE = 50000;
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (Car.MAX_PRICE > newPrice) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
//===========================================

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (Car.#MAX_PRICE < price) {
//       console.log("error");
//       return "Error! Price exceeds the maximum";
//     } else {
//       console.log("success");
//       return "Success! Price is within acceptable limits";
//     }
//   }

//   //   return this.price > Car.#MAX_PRICE
//   //     ? "Error! Price exceeds the maximum"
//   //     : "Success! Price is within acceptable limits";
//   // }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// // console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// // console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// console.log(Car.checkPrice(36000));
// console.log(Car.checkPrice(18000));
// console.log(Car.checkPrice(64000));
// console.log(Car.checkPrice(57000));

//================================================
// Потрібно створити картки продуктів
const instruments = [
  {
    id: 1,
    img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_261194.jpg",
    name: "Молоток",
    price: 150,
  },
  {
    id: 2,
    img: "https://static.dnipro-m.ua/cache/products/5587/catalog_origin_190742.jpg",
    name: "Перфоратор",
    price: 3000,
  },
  {
    id: 3,
    img: "https://static.dnipro-m.ua/cache/products/2299/catalog_origin_261034.jpg",
    name: "Рівень",
    price: 2000,
  },
];
//=== 1st metod ======================================
// const listContainer = document.querySelector(".js-list");

// listContainer.style.display = "flex";
// listContainer.style.listStyle = "none";

// listContainer.classList.add("list");
// listContainer.classList.remove("list");

// listContainer.classList.toggle("list");
// listContainer.classList.toggle("list");

// listContainer.style.listStyle = "disk";

// const markUp = instruments.map((el) => {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   const span = document.createElement("span");
//   const title = document.createElement("h2");
//   img.src = el.img;
//   img.alt = el.name;
//   img.width = 300;
//   span.textContent = el.price;
//   title.textContent = el.name;

//   li.classList.add("item", "item-style");
//   span.classList.add("text");
//   title.classList.add("title");

//   li.append(img, title, span);
//   return li;
// });

// listContainer.append(...markUp);

//===== 2nd metod ======================================
const listContainer = document.querySelector(".js-list");
const markup = instruments
  .map(
    ({ img, name, price }) =>
      `<li class="item item-style">
    <img class="" src="${img}" alt="${name}" width="300">
    <h2 class="title">${name}</h2>
    <span class="text">${price}</span>
</li>`
  )
  .join("");
listContainer.insertAdjacentHTML("afterbegin", markup);
