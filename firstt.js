/**
 * Created by vladimir on 12/3/13.
 */


/**
 * @param {string} input
 * @return {String}
**/

exports.getminmaxd = function(input) {
  var max;
  var min;
  var remains;
  var num = parseInt(input);
  if (input === num.toString()) {
    max = 0;
    min = 10;
    num = Math.abs(num);
    while (num > 0) {
      remains = num % 10;
      if (remains > max) {
        max = remains;
      }
      if (remains < min) {
        min = remains;
      }
      num = (num - remains) / 10;
    }
    return 'Наименьшая цифра числа=' + min.toString() + '\n' +
        'Наибольшая цифра числа=' + max.toString();
  }
  else {
    return 'На обработку поступило не число';
  }
};

