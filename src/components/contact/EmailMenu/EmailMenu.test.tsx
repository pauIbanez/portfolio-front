/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from "@testing-library/react";
import EmailMenu from "./EmailMenu";
import { renderInRouter } from "../../../setupTests";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Given the EmailMenu component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render an email button", () => {
      const expectedButton =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";

      renderInRouter(<EmailMenu />);

      const foundButton = screen.getByRole("button", { name: expectedButton });

      expect(foundButton).toBeInTheDocument();
    });

    test("Then it should render a coppy email button and a open email link, but not visible", () => {
      const expectedCopyButton = "Contact.contactInfo.itemValues.copyEmail";
      const expectedOpenLink =
        "Contact.contactInfo.itemValues.openEmail newscreen";

      renderInRouter(<EmailMenu />);

      const foundButton = screen.getByRole("button", {
        name: expectedCopyButton,
      });

      const foundEmailLink = screen.getByRole("link", {
        name: expectedOpenLink,
      });

      expect(foundButton).toBeInTheDocument();
      expect(foundButton).not.toBeVisible();

      expect(foundEmailLink).toBeInTheDocument();
      expect(foundEmailLink).not.toBeVisible();
    });
  });

  describe("When it's instanciated and the emailButotn is clicked", () => {
    test("Then it should render a coppy email button and a open email link, as visible", () => {
      const expectedButton =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";
      const expectedCopyButton = "Contact.contactInfo.itemValues.copyEmail";
      const expectedOpenLink =
        "Contact.contactInfo.itemValues.openEmail newscreen";

      renderInRouter(<EmailMenu />);

      const foundButton = screen.getByRole("button", {
        name: expectedButton,
      });

      act(() => {
        userEvent.click(foundButton);
      });

      const foundCopyButton = screen.getByRole("button", {
        name: expectedCopyButton,
      });

      const foundEmailLink = screen.getByRole("link", {
        name: expectedOpenLink,
      });

      expect(foundCopyButton).toBeInTheDocument();
      expect(foundCopyButton).toBeVisible();

      expect(foundEmailLink).toBeInTheDocument();
      expect(foundEmailLink).toBeVisible();
    });
  });

  describe("When it's instanciated and the coppy email button is clicked", () => {
    const mockWriteText = jest.fn();
    let originalClippboard = { ...navigator.clipboard };

    beforeAll(() => {
      originalClippboard = { ...navigator.clipboard };

      Object.assign(navigator, {
        clipboard: {
          writeText: mockWriteText,
        },
      });
    });

    afterAll(() => {
      Object.assign(navigator, {
        clipboard: originalClippboard,
      });
    });

    test("Then it should call mockWriteText", () => {
      const expectedButton =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";
      const expectedCopyButton = "Contact.contactInfo.itemValues.copyEmail";

      renderInRouter(<EmailMenu />);

      const foundButton = screen.getByRole("button", {
        name: expectedButton,
      });

      act(() => {
        userEvent.click(foundButton);
      });

      const foundCopyButton = screen.getByRole("button", {
        name: expectedCopyButton,
      });

      act(() => {
        userEvent.click(foundCopyButton);
      });

      expect(foundCopyButton).toBeInTheDocument();
      expect(foundCopyButton).not.toBeVisible();

      expect(mockWriteText).toHaveBeenCalledWith("pauibanez2001@gmail.com");
    });
  });
});
