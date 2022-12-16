class Printer2 {
  printHearts(number) {
    if (number === 0) {
      return '';
    }

    const repeatHeart = count => {
      return '♡'.repeat(count);
    };

    const abs = Math.abs(parseInt(number));

    const rowTexts = new Array(abs).fill().map((el, idx, arr) => {
      return number > 0 ? repeatHeart(idx + 1) : repeatHeart(arr.length - idx);
    });

    return rowTexts.join('\n');
  }
}

const task2 = new Printer2();
console.log(task2.printHearts(2));
console.log(task2.printHearts(5));
console.log(task2.printHearts(-4));

// console.log(task2.printHearts(0));
// console.log(task2.printHearts(3.5));
// console.log(task2.printHearts(-4.2));
// console.log(task2.printHearts(50));
// console.log(task2.printHearts(-50));
