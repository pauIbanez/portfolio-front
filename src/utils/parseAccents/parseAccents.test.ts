import parseAccents from "./parseAccents";

describe("Given parseAccents", () => {
  describe("When it's called passing 'Hello <&>world'", () => {
    test("Then it should return ['Hello ', 'world']", () => {
      const inputString = "Hello <&>world";
      const expectedOutput = ["Hello ", "world"];

      const output = parseAccents(inputString);

      expect(output).toEqual(expectedOutput);
    });
  });
});
