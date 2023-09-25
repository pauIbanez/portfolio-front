/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from "@testing-library/react";
import ContactPage from "./ContactPage";
import { renderInRouter } from "../../setupTests";

describe("Given the ContactPage Page", () => {
  describe("When it's intanciated", () => {
    test("Then it should render 2 text sections and a form", () => {
      const expectedNumberOfSections = 2;

      renderInRouter(<ContactPage />);

      const foundTextSectionsTitles = screen.getAllByRole("heading", {
        level: 3,
      });
      const foundForm = screen.getByRole("form");

      expect(foundTextSectionsTitles.length).toBe(expectedNumberOfSections);
      expect(foundForm).toBeInTheDocument();
    });
  });
});
