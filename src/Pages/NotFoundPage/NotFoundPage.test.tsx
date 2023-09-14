import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage", () => {
  describe("When it's instanciated", () => {
    test("Then it should render an image, an h3 and some text", () => {
      const expectedAlt = "NotFound.image";
      const expectedTitle = "NotFound.title";
      const expectedText = "NotFound.text";

      render(<NotFoundPage />);

      const foundTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitle,
      });
      const foundText = screen.getByText(expectedText);
      const foundImg = screen.getByAltText(expectedAlt);

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
      expect(foundImg).toBeInTheDocument();
    });
  });
});
