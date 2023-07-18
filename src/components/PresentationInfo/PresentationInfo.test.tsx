import { render, screen } from "@testing-library/react";
import PresentationInfo from "./PresentationInfo";

describe("Given the PresentationInfo component", () => {
  describe("When it's intanciated", () => {
    test("Then it should render a heading level 3 with text: 'PAU IBÁÑEZ PORTFOLIO'", () => {
      const expectedText = "PAU IBÁÑEZ PORTFOLIO";

      render(<PresentationInfo />);

      const foundText = screen.getByRole("heading", {
        name: expectedText,
        level: 3,
      });

      expect(foundText).toBeInTheDocument();
    });

    test("Then it should render the logo", () => {
      const altText = "My logo";

      render(<PresentationInfo />);

      const foundLogo = screen.getByAltText(altText);

      expect(foundLogo).toBeInTheDocument();
    });
  });
});
