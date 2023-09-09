import { render, screen } from "@testing-library/react";
import AboutMePage from "./AboutMePage";

describe("Given the AboutMePage", () => {
  describe("When it's instaciated", () => {
    test("Then it should render 4 headings level 3", () => {
      const expectedHeadings = 4;

      render(<AboutMePage />);

      const foundHeadings = screen.getAllByRole("heading", { level: 3 });

      expect(foundHeadings.length).toBe(expectedHeadings);
    });
  });
});
