"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число:");
  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert("Було введено не число, попробуйте ще раз");
      continue;
    }
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Програма завершена, так як Ви ні разу не ввели число.");
}
