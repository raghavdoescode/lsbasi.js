const Interpreter = require("./interpreter");
const input = require("input");

async function run() {
  while (true) {
    const expr = await input.text("calc>");
    const interpreter = new Interpreter(expr);

    console.log(interpreter.expr());
  }
}
run();
