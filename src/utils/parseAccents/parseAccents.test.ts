import parseAccents from "./parseAccents";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Given parseAccents", () => {
  describe("When it's called passing 'Hello <&>world'", () => {
    test("Then it should return ['Hello ', 'world']", () => {
      const inputString = "Hello <&>world";
      const expectedOutput = ["Hello ", "world"];

      const output = parseAccents(inputString);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe("When it's called passing '<&>Hello <&>world'", () => {
    test("Then it should return ['','Hello ', 'world']", () => {
      const inputString = "<&>Hello <&>world";
      const expectedOutput = ["", "Hello ", "world"];

      const output = parseAccents(inputString);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe("When it's called passing 'testString'", () => {
    test("Then it should return 'testString'", () => {
      const inputString = "testString";
      const expectedOutput = ["testString"];

      const output = parseAccents(inputString);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe("When it's called and the parse fails", () => {
    test("Then it should return the original string", () => {
      const inputString = "testString";

      JSON.parse = jest.fn().mockImplementationOnce(() => {
        throw new Error("test error");
      });

      const output = parseAccents(inputString);

      expect(output).toEqual(inputString);
    });
  });
});
