const Calculator = require("./calculator");
let calculator = new Calculator();
test("add", () => {
  expect(calculator.add(-1, +3)).toBe(2);
});

test("subtract", () => {
  expect(calculator.subtract(1, +3)).toBe(-2);
});

test("divide", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test("multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
