class Printer {
  printHearts(number) {
    // 입력: 숫자(음수, 양수)
    // 출력: 문자열

    const abs = Math.abs(parseInt(number));

    let text = '';
    if (number === 0) {
      return text;
    }

    for (let i = 1; i <= abs; i++) {
      if (number >= 0) {
        for (let j = 1; j <= i; j++) {
          text += '♡';
        }
      } else {
        for (let j = abs; j - i >= 0; j--) {
          text += '♡';
        }
      }
      if (i !== abs) {
        text += '\n';
      }
    }
    return text;
  }
}

const task = new Printer();
console.log(task.printHearts(2));
console.log(task.printHearts(5));
console.log(task.printHearts(-4));

// console.log(task.printHearts(0));
// console.log(task.printHearts(3.5));
// console.log(task.printHearts(-4.2));
// console.log(task.printHearts(50));
// console.log(task.printHearts(-50));
