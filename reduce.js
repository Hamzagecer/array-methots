var numbers = [300, 75, 25];

function test(total, num) {
  return total - num;
}

console.log(numbers.reduce(test)); // 200

var numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(numbers.reduce(getSum, 0));
