import { render, screen } from "@testing-library/react";
import ColoredText from "./ColoredText";
import Colors from "../../data/style/Colors";
import toRGB from "../../utils/toRGBA";

describe("Given the ColoredText component", () => {
  describe("When it's instanciated passing the textArray ['Test ', 'text']", () => {
    const text = ["Test ", "text"];
    const expectedTexts = ["Test", "text"];

    test("Then it should render the text 'Test' with font size 14px, font-weight 400 and color black", () => {
      const expectedStyle = {
        fontSize: "14px",
        fontWeight: 400,
        color: "black",
      };

      render(<ColoredText textArray={text} />);

      const foundText = screen.getByText(expectedTexts[0]);

      expect(foundText).toBeInTheDocument();
      expect(foundText).toHaveStyle(expectedStyle);
    });

    test("Then it should render the text 'text' with color main", () => {
      const expectedStyle = {
        color: toRGB(Colors.main),
      };

      console.log(toRGB(Colors.main));

      render(<ColoredText textArray={text} />);

      const foundText = screen.getByText(expectedTexts[1]);

      expect(foundText).toBeInTheDocument();
      expect(foundText).toHaveStyle(expectedStyle);
    });
  });
});
