import { render, screen } from "@testing-library/react";
import ColoredText from "./ColoredText";
import Colors from "../../data/style/Colors";
import toRGB from "../../utils/toRGBA";

describe("Given the ColoredText component", () => {
  const text = ["Test ", "text"];
  const expectedTexts = ["Test", "text"];

  describe("When it's instanciated passing the textArray ['Test ', 'text']", () => {
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

      render(<ColoredText textArray={text} />);

      const foundText = screen.getByText(expectedTexts[1]);

      expect(foundText).toBeInTheDocument();
      expect(foundText).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's instanciated passing the textArray ['Test ', 'text'] and styleData is set as title", () => {
    test("Then it should render the text with font size 48px and font-weight 800", () => {
      const styleData = {
        isTitle: true,
      };
      const expectedText = "Test";
      const expectedStyle = {
        fontSize: "48px",
        fontWeight: 800,
      };

      render(<ColoredText textArray={text} styleData={styleData} />);

      const foundText = screen.getByText(expectedText);

      expect(foundText).toBeInTheDocument();
      expect(foundText).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's instanciated passing the textArray ['Test ', 'text'] and styleData is all set to values", () => {
    test("Then it should render the text with the style from styleData", () => {
      const styleData = {
        color: "red",
        size: "50px",
        weight: 300,
        accentColor: "blue",
      };

      const expected_Test_Style = {
        fontSize: "50px",
        fontWeight: 300,
        color: "red",
      };

      const expected_text_Style = {
        color: "blue",
      };

      render(<ColoredText textArray={text} styleData={styleData} />);

      const foundText_Test = screen.getByText(expectedTexts[0]);
      const foundText_text = screen.getByText(expectedTexts[1]);

      expect(foundText_Test).toBeInTheDocument();
      expect(foundText_text).toBeInTheDocument();
      expect(foundText_Test).toHaveStyle(expected_Test_Style);
      expect(foundText_text).toHaveStyle(expected_text_Style);
    });
  });
});
