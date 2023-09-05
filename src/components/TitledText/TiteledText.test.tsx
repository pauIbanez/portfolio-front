import { render, screen } from "@testing-library/react";
import TiteledText from "./TiteledText";

describe("Given the TiteledText component", () => {
  describe("When it's instanciated passing a title and a text", () => {
    test("Then it should render that title and text", () => {
      const title = "test title";
      const text = "test text";

      render(<TiteledText title={title} text={text} />);

      const foundTitle = screen.getByRole("heading", {
        level: 3,
        name: title,
      });

      const foundText = screen.getByText(text);

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
    });
  });
});
