import { getTokenSourceMapRange } from "typescript";

//Напиши функцию isEven(num), которая возвращает true, если число чётное, и false — если нечётное.//
while (true) {
   let num = prompt("Введите число");
   if (num == "stop") {
      console.log("цикл остановлен");
      break;
   }
   if (num == 0 || num === "") {
      console.log("error");
      continue;
   }
   function isEven(num) {
      if (Number(num) % 2 === 0) {
         console.log("true");
         return true;
      } else {
         console.log("false");
         return false;
      }

   }
   isEven(num);
   continue;
}
// не понимаю почему мне в консоль выводит False при введении строкового значения, код в VSC работает//
