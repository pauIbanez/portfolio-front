import { render, screen } from "@testing-library/react";
import PresentationText from "./PresentationText";

describe("Given the PresentationText component", () => {
  describe("When it's intanciated with a title, text and button data", () => {
    test("Then it should render the passed title and texts", () => {
      const title = "title";
      const text = "text test";
      const buttonName = "Button content";

      const buttonData = {
        content: <p>{buttonName}</p>,
        onClick: () => null,
      };

      render(
        <PresentationText title={title} text={text} button={buttonData} />
      );

      const foundTitle = screen.getByRole("heading", { level: 2, name: title });
      const foundText = screen.getByText(text);
      const foundButton = screen.getByRole("button", { name: buttonName });

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
      expect(foundButton).toBeInTheDocument();
    });
  });
});
