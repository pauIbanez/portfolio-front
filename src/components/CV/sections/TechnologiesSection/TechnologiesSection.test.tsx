/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import TechnologiesSection from "./TechnologiesSection";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";

describe("Given the TechnologiesSection comonent", () => {
  describe("When it's intanciated", () => {
    test("Then it should render the heading 'CV.sections.technologies.title'", () => {
      const expectedTitle = "CV.sections.technologies.title";

      render(<TechnologiesSection />);

      const foundTitle = screen.getByRole("heading", {
        name: expectedTitle,
        level: 3,
      });

      expect(foundTitle).toBeInTheDocument();
    });

    test("Then the prev button should be disabled", () => {
      const expectedButton = "CV.sections.technologies.pages.controls.prev";

      render(<TechnologiesSection />);

      const foundPrevButton = screen.getByRole("button", {
        name: expectedButton,
      });

      expect(foundPrevButton).toBeDisabled();
    });
  });

  describe("When it's intanciated and the page is changed", () => {
    test("Then it should render the 2nd page title 'CV.sections.technologies.pages.skills.name'", async () => {
      const expectedName = "CV.sections.technologies.pages.skills.name";

      render(<TechnologiesSection />);

      const foundNextButton = screen.getByRole("button", {
        name: "CV.sections.technologies.pages.controls.next",
      });

      await act(async () => {
        userEvent.click(foundNextButton);
        await wait(500);
      });

      const foundTitle = screen.getByRole("heading", {
        name: expectedName,
        level: 4,
      });
      expect(foundTitle).toBeVisible();
    });
  });
  describe("When it's intanciated and the page is changed and then back", () => {
    test("Then the Prev button should become pressable and disabled", async () => {
      const expectedPrevButton = "CV.sections.technologies.pages.controls.prev";
      const expectedNextButton = "CV.sections.technologies.pages.controls.next";

      render(<TechnologiesSection />);

      const foundNextButton = screen.getByRole("button", {
        name: expectedNextButton,
      });

      await act(async () => {
        userEvent.click(foundNextButton);
        await wait(500);
      });

      let foundPrevButton = screen.getByRole("button", {
        name: expectedPrevButton,
      });
      expect(foundPrevButton).not.toBeDisabled();

      await act(async () => {
        userEvent.click(foundPrevButton);
        await wait(500);
      });

      foundPrevButton = screen.getByRole("button", {
        name: expectedPrevButton,
      });

      expect(foundPrevButton).toBeDisabled();
    });
  });
});
