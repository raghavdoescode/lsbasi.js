class Token {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  str() {
    return `Token(${this.type}, ${this.value})`;
  }

  repr() {
    return this.str();
  }
}

module.exports = Token;
