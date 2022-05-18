const dateTime = require("./dateTime");

describe("should return today", () => {
  it("should be return today", () => {
    expect(dateTime.showToday()).toBe(20220518);
  });
});
