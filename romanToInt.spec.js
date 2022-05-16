const romanToInt = require("./romanToInt");

describe("should return integer from roman", () => {
  it("should be return 20", () => {
    expect(romanToInt("XX")).toBe(20);
  });

  it("should be return 100", () => {
    expect(romanToInt("C")).toBe(100);
  });
});
