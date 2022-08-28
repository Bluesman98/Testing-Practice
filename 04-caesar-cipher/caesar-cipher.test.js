const cipher = require("./caesar-cipher");

test("one char z-a", () => {
  expect(cipher("z", 1)).toBe("a");
});

test("one char z-b", () => {
  expect(cipher("z", 2)).toBe("b");
});
test("george-hfpshf", () => {
  expect(cipher("george", 1)).toBe("hfpshf");
});

test("big string capital", () => {
  expect(cipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 23)).toBe(
    "XYZABCDEFGHIJKLMNOPQRSTUVW"
  );
});
