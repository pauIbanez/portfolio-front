import toRGB from "./toRGB";

describe("Given util toRGB", () => {
  describe("When it's called passing hex '#8A1C05'", () => {
    test("Then it should return 'rgb(138, 28, 5)'", () => {
      const hex = "#8A1C05";
      const expectedReturn = "rgb(138, 28, 5)";

      const rgb = toRGB(hex);

      expect(rgb).toBe(expectedReturn);
    });
  });

  describe("When it's called passing hex '#46933A'", () => {
    test("Then it should return 'rgb(70, 147, 58)'", () => {
      const hex = "#46933A";
      const expectedReturn = "rgb(70, 147, 58)";

      const rgb = toRGB(hex);

      expect(rgb).toBe(expectedReturn);
    });
  });

  describe("When it's called passing hex '#5F8'", () => {
    test("Then it should return 'rgb(85, 255, 136)'", () => {
      const hex = "#5F8";
      const expectedReturn = "rgb(85, 255, 136)";

      const rgb = toRGB(hex);

      expect(rgb).toBe(expectedReturn);
    });
  });
});
