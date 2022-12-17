class Printer {
  printHearts(number) {
    const abs = Math.abs(parseInt(number));

    let text = '';
    if (number === 0) {
      return text;
    }

    const repeatHeart = count => {
      return '♡'.repeat(count);
    };

    for (let i = 1; i <= abs; i++) {
      number >= 0
        ? (text += repeatHeart(i))
        : (text += repeatHeart(abs + 1 - i));

      if (i !== abs) {
        text += '\n';
      }
    }
    return text;
  }
}

module.exports = Printer;
