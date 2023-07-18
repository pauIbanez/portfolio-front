import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";
import toRGB from "../../utils/toRGBA";
import Colors from "../../data/style/Colors";

describe("Given the PageTitle component", () => {
  describe("When it's passed a string as title", () => {
    test("Then it should render an h1 with font-size 48px and weight as 800", () => {
      const title = "test title";
      const expectedStyle = {
        fontSize: "48px",
        fontWeight: 800,
      };

      render(<PageTitle title={title} />);

      const foundTitle = screen.getByRole("heading", { name: title, level: 1 });

      expect(foundTitle).toBeInTheDocument();
      expect(foundTitle).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's passed an array as title", () => {
    test("Then it should render a text with color main", () => {
      const title = ["test ", "title"];
      const expectedStyle = {
        color: toRGB(Colors.main),
      };

      render(<PageTitle title={title} />);

      const foundTitle_title = screen.getByText(title[1]);

      expect(foundTitle_title).toBeInTheDocument();
      expect(foundTitle_title).toHaveStyle(expectedStyle);
    });
  });
});
