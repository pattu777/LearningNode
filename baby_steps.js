let totalSum = 0;

arguments = process.argv;
for (let i = 2; i < arguments.length; i++) {
  totalSum += Number(arguments[i]);
}
console.log(totalSum);
