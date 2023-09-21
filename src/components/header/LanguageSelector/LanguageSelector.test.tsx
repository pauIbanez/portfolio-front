/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import LanguageSelector from "./LanguageSelector";
import userEvent from "@testing-library/user-event";
import { mockChangeLanguage } from "../../../setupTests";
import { act } from "react-dom/test-utils";

describe("Given the LanguageSelectorComponent", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the currentLanguage", () => {
      const expectedText = "EN";

      render(<LanguageSelector />);

      const foundText = screen.getByText(expectedText);

      expect(foundText).toBeInTheDocument();
    });
  });

  describe("When it's instanciated and the selector is pressed and changed to another language", () => {
    test("Then it should call mockChangeLanguage", () => {
      const expectedText = "EN";
      const expectedButton = "Spanish";
      const expectedSpanishCode = "es";

      render(<LanguageSelector />);

      const foundText = screen.getByText(expectedText);

      act(() => {
        userEvent.click(foundText);
      });

      const foundSpanishButton = screen.getByRole("button", {
        name: expectedButton,
      });

      act(() => {
        userEvent.click(foundSpanishButton);
      });

      expect(mockChangeLanguage).toHaveBeenCalledWith(expectedSpanishCode);
    });
  });

  describe("When it's instanciated, opened and the user clicks on another side", () => {
    test("Then it should close the menu", () => {
      const expectedText = "EN";
      const expectedButton = "Spanish";
      const expectedStyle = {
        opacity: 0,
      };

      render(
        <>
          <p>Other</p>
          <LanguageSelector />
        </>
      );

      const foundText = screen.getByText(expectedText);

      act(() => {
        userEvent.click(foundText);
      });

      const foundOther = screen.getByText("Other");

      act(() => {
        userEvent.click(foundOther);
      });

      const foundSpanishButton = screen.getByRole("button", {
        name: expectedButton,
      });

      expect(foundSpanishButton).toHaveStyle(expectedStyle);
    });
  });
});
