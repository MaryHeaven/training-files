// // Это довольно просто. Ваша цель-создать функцию, которая удаляет первый и последний символы строки. 
// // Вам дается один параметр-исходная строка. Вам не нужно беспокоиться о строках с менее чем двумя символами.
// // https://www.codewars.com/kata/reviews/56bcf9bc8698152aba000015/groups/6221a8dea868f60001aed3dc 

function removeChar(str){
  let word = str.split('');
  word.pop();
  word.shift();
  let char = word.join('');
  return char
  }

  module.exports = removeChar;
