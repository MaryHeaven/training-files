// Очень просто, учитывая целое число или число с плавающей запятой, найти его противоположность.
// Примеры:
// 1: -1
// 14: -14
// -34: 34
// https://www.codewars.com/kata/reviews/56deebdf6a5c28baa9000031/groups/5dc6aa17f67e8a0001ea9e29

function opposite(number) {
  if (number > 0) {
    return -number
  } else if (number < 0 ) {
    return number * -1
  }
}

module.exports = opposite;
