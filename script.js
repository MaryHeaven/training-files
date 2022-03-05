// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.
// Пример [1,-4,7,12]=> 1 + 7 + 12 = 20
// Примечание: если суммировать нечего, то по умолчанию используется значение sum 0.
// https://www.codewars.com/kata/reviews/5715eaf87cf4f3befe00002e/groups/574517f7c97a4caf04000480 

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    } 
  }
  return sum  
}

module.exports = positiveSum;
