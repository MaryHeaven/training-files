const positiveSum = require('./script')

test('Сумма массива из только положительных чисел', function() {
  expect(positiveSum([1, -4, 7, -2, -45, 8, 15, 12])).toBe(43);
  expect(positiveSum([1, -4, 7, -2, -45, 12])).toBe(20);
  expect(positiveSum([1, -4, 7, 123, 7, 50, -9, 24, -45, 8, 15, 12])).toBe(247);
})


const opposite = require('./script_01')

test('Противоположность значения числа', function() {
  expect(opposite(12)).toBe(-12);
  expect(opposite(-182)).toBe(182);
  expect(opposite(-13482)).toBe(13482);
  expect(opposite(1)).toBe(-1);
})


const removeChar = require('./script_02')

test('Удаление первого и последнего символа строки', function() {
  expect(removeChar('place')).toBe('lac');
  expect(removeChar('disconnect')).toBe('isconnec');
  expect(removeChar('Рубль')).toBe('убл');
  expect(removeChar('Эльбрус')).toBe('льбру');
})


const repeatStr = require('./script_03')

test('Повторение строки n - число раз', function() {
  expect(repeatStr(5, "Hello")).toBe('HelloHelloHelloHelloHello');
  expect(repeatStr(2, "косу")).toBe('косукосу');
  expect(repeatStr(8, "Эльбрус")).toBe('ЭльбрусЭльбрусЭльбрусЭльбрусЭльбрусЭльбрусЭльбрусЭльбрус');
  expect(repeatStr(3, "=^_^=")).toBe('=^_^==^_^==^_^=');
})
