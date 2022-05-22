const testFunction = require("./exercisesForJS");

describe("should return parameterize from input string", () => {
  it("should be return dang-anh-tu", () => {
    const strTmp = testFunction.caseSwap("abGHjk");
    console.log(strTmp);
    expect(strTmp).toBe("ABghJK");
  });
});
