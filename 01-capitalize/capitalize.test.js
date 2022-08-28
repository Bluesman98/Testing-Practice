const capitalize = require("./capitalize");

test("george to equal George", () => {
  expect(capitalize("george")).toBe("George");
});
