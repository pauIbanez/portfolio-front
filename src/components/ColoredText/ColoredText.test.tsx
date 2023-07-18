import { render, screen } from "@testing-library/react";
import ColoredText from "./ColoredText";

describe("Given the ColoredText component", () => {
  describe("When it's instanciated passing the textArray ['Test ', 'text']", () => {
    const text = ["Test ", "text"];
    const expectedTexts = ["Test", "text"];

    test("Then it should render the text 'Test text' with font size 16px, font-weight 400 and color black", () => {
      const expectedStyle = {
        fontSize: "14px",
        fontWeight: 400,
        color: "black",
      };

      render(<ColoredText textArray={text} />);

      const foundText_1 = screen.getByText(expectedTexts[0]);
      const foundText_2 = screen.getByText(expectedTexts[1]);

      expect(foundText_1).toBeInTheDocument();
      expect(foundText_2).toBeInTheDocument();
      expect(foundText_1).toHaveStyle(expectedStyle);
    });
  });
});
