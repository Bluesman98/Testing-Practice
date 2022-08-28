const analyzeArray = require("./analyze-array");

const data = analyzeArray([1, 2, 4, 4, 1]);

test("check length", () => {
  expect(data.length).toBe(5);
});

test("check average", () => {
  expect(data.average).toBe(2.4);
});

test("check min", () => {
  expect(data.min).toBe(1);
});

test("check max", () => {
  expect(data.max).toBe(4);
});
