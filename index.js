const Printer = require('./Printer');

const task = new Printer();
console.log(task.printHearts(2));
console.log(task.printHearts(5));
console.log(task.printHearts(-4));

// console.log(task.printHearts(0));
// console.log(task.printHearts(3.5));
// console.log(task.printHearts(-4.2));
// console.log(task.printHearts(50));
// console.log(task.printHearts(-50));
