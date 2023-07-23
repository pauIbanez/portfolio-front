import { render, screen } from "@testing-library/react";
import CVSection from "./CVSection";

describe("Given the CVSection component", () => {
  describe("When instanciated", () => {
    test("Then it should render the title and the children", () => {
      const childrenText = "test";
      const title = "Test title";

      render(
        <CVSection title={title}>
          <p>{childrenText}</p>
        </CVSection>
      );

      const foundTitle = screen.getByRole("heading", { level: 3, name: title });
      const foundChildren = screen.getByText(childrenText);

      expect(foundTitle).toBeInTheDocument();
      expect(foundChildren).toBeInTheDocument();
    });
  });
});
