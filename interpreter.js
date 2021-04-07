const Token = require("./token");

class Interpreter {
  constructor(text) {
    this.text = text;
    this.pos = 0;
    this.currentToken = null;
  }

  isNumber(n) {
    return /^\d+$/.test(n);
  }

  error() {
    throw new Error("Error Parsing Input");
  }

  getNextToken() {
    const text = this.text;

    if (this.pos > text.length - 1) {
      return new Token("EOF", null);
    }

    const currentCharacter = text[this.pos];

    if (this.isNumber(currentCharacter)) {
      const token = new Token("INTEGER", parseInt(currentCharacter));
      this.pos += 1;
      return token;
    }

    if (currentCharacter === "+") {
      const token = new Token("PLUS", currentCharacter);
      this.pos += 1;
      return token;
    }

    this.error();
  }

  eat(tokenType) {
    if (this.currentToken.type == tokenType) {
      this.currentToken = this.getNextToken();
    }
  }

  expr() {
    this.currentToken = this.getNextToken();

    const left = this.currentToken;
    this.eat("INTEGER");

    const op = this.currentToken;
    this.eat("PLUS");

    const right = this.currentToken;
    this.eat("INTEGER");

    const result = left.value + right.value;

    return result;
  }
}

module.exports = Interpreter;
