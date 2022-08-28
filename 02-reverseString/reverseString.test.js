const reverseString = require("./reverseString");

test("george to equal egroeg", () => {
  expect(reverseString("george")).toBe("egroeg");
});
