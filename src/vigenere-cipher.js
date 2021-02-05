class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
    this.result = [];
    this.index = 0;
    this.alphabet = Array(26)
      .fill(0)
      .reduce((alphabet, element, i) => [...alphabet, String.fromCharCode(i + 65)], []);
  }

  checkParamsExist(message, key) {
    if (!message || !key) {
      throw new Error();
    }
  }

  reformatParams(message, key) {
    return {
      m: message.toUpperCase().split(''),
      k: key.toUpperCase().split(''),
    };
  }

  updateIndex(number) {
    this.index++;

    if (this.index === number) {
      this.index = 0;
    }
  }

  get finalResult() {
    const result = [...this.result];
    this.result = [];
    this.index = 0;

    return this.reverse === false ? result.reverse().join('') : result.join('');
  }

  checkSymbolSpecial(symbol) {
    if (!this.alphabet.includes(symbol)) {
      this.result.push(symbol);
      return true;
    }
  }

  encrypt(message, key) {
    this.checkParamsExist(message, key);
    const { m, k } = this.reformatParams(message, key);

    for (let i = 0; i < m.length; i++) {
      if (this.checkSymbolSpecial(m[i])) {
        continue;
      }

      const sum = this.alphabet.indexOf(m[i]) + this.alphabet.indexOf(k[this.index]);
      const shift = this.alphabet.length - 1 - sum;
      const finIndex = shift < 0 ? Math.abs(shift) - 1 : sum;

      this.result.push(this.alphabet[finIndex]);
      this.updateIndex(k.length);
    }

    return this.finalResult;
  }

  decrypt(message, key) {
    this.checkParamsExist(message, key);
    const { m, k } = this.reformatParams(message, key);

    for (let i = 0; i < m.length; i++) {
      if (this.checkSymbolSpecial(m[i])) {
        continue;
      }

      const mI = this.alphabet.indexOf(m[i]);
      const kI = this.alphabet.indexOf(k[this.index]);
      let finIndex = 1 + (mI > kI) ? mI - kI : kI - mI;
      finIndex = finIndex < 0 ? this.alphabet.length + finIndex : finIndex;

      this.result.push(this.alphabet[finIndex]);
      this.updateIndex(k.length);
    }

    return this.finalResult;
  }
}

module.exports = VigenereCipheringMachine;
