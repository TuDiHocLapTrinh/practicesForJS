const testFunction = require("./exercisesForJS");

describe("should return parameterize from input string", () => {
  it("should be return dang-anh-tu", () => {
    const strTmp = testFunction.mostFrequent([
      1, 8, 9, 7, 9, 5, 7, 0, 1, 5, 3, 4,
    ]);
    console.log(strTmp);
    expect(strTmp).toEqual("9,7,1,5");
  });
});
