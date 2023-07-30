import { render, screen } from "@testing-library/react";
import ColoredText from "./ColoredText";
import Colors from "../../data/style/Colors";
import toRGB from "../../utils/toRGB/toRGB";

describe("Given the ColoredText component", () => {
  describe("When it's instanciated passing the text 'test <&>text'", () => {
    test("Then it should render the text 'Test' with font size 14px, font-weight 400 and color black", () => {
      const text = "test <&>text";
      const expectedText = "test";

      const expectedStyle = {
        fontSize: "14px",
        fontWeight: 400,
        color: "black",
      };

      render(<ColoredText text={text} />);

      const foundText = screen.getByText(expectedText);

      expect(foundText).toBeInTheDocument();
      expect(foundText).toHaveStyle(expectedStyle);
    });

    test("Then it should render the text 'text' with color main", () => {
      const text = "test <&>text";
      const expectedText = "text";

      const expectedStyle = {
        color: toRGB(Colors.main),
      };

      render(<ColoredText text={text} />);

      const foundText = screen.getByText(expectedText);

      expect(foundText).toBeInTheDocument();
      expect(foundText).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's instanciated passing the text '<&>My <&> Test' as a heading level 2", () => {
    test("Then it should render the text as an h2", () => {
      const styleData = {
        heading: 2,
      };
      const text = "<&>My <&> Test";

      render(<ColoredText text={text} styleData={styleData} />);

      const foundHeading = screen.getByRole("heading", { level: 2 });

      expect(foundHeading).toBeInTheDocument();
    });
  });

  describe("When it's instanciated passing the text '<&>My <&> Test' and styleData is all set to values", () => {
    test("Then it should render the text with the style from styleData", () => {
      const text = "<&>My <&> Test";

      const expectedTexts = ["My", "Test"];

      const styleData = {
        color: "red",
        size: "50px",
        weight: 300,
        accentColor: "blue",
      };

      const expected_My_Style = {
        color: "blue",
      };

      const expected_Test_Style = {
        color: "red",
        fontSize: "50px",
        fontWeight: 300,
      };

      render(<ColoredText text={text} styleData={styleData} />);

      const foundText_Test = screen.getByText(expectedTexts[0]);
      const foundText_text = screen.getByText(expectedTexts[1]);

      expect(foundText_Test).toBeInTheDocument();
      expect(foundText_text).toBeInTheDocument();
      expect(foundText_Test).toHaveStyle(expected_My_Style);
      expect(foundText_text).toHaveStyle(expected_Test_Style);
    });
  });
});
