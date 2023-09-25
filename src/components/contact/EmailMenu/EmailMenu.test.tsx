/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from "@testing-library/react";
import EmailMenu from "./EmailMenu";
import { renderInRouter } from "../../../setupTests";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Wait from "../../../utils/Wait/Wait";

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
    test("Then it should call mockWriteText and present the coppy alert", async () => {
      const expectedButton =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";
      const expectedCopyButton = "Contact.contactInfo.itemValues.copyEmail";
      const expectedText = "Email Coppied!";

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

      const foundCopyAlert = screen.getByText(expectedText);

      expect(foundCopyAlert).not.toBeVisible();

      act(() => {
        userEvent.click(foundCopyButton);
      });

      expect(foundCopyAlert).toBeVisible();
      expect(foundCopyButton).toBeInTheDocument();
      expect(foundCopyButton).not.toBeVisible();

      await act(async () => {
        await Wait(2000);
      });

      expect(foundCopyAlert).not.toBeVisible();

      expect(mockWriteText).toHaveBeenCalledWith("pauibanez2001@gmail.com");
    });
  });

  describe("When it's instanciated and the coppy email button is clicked more than once", () => {
    test("Then it should not hide the coppppyEmail alert", async () => {
      const expectedButton =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";
      const expectedCopyButton = "Contact.contactInfo.itemValues.copyEmail";
      const expectedText = "Email Coppied!";

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

      const foundCopyAlert = screen.getByText(expectedText);

      expect(foundCopyAlert).not.toBeVisible();

      act(() => {
        userEvent.click(foundCopyButton);
      });

      expect(foundCopyAlert).toBeVisible();
      expect(foundCopyButton).toBeInTheDocument();
      expect(foundCopyButton).not.toBeVisible();

      await act(async () => {
        await Wait(1000);
      });

      act(() => {
        userEvent.click(foundButton);
      });

      act(() => {
        userEvent.click(foundCopyButton);
      });

      await act(async () => {
        await Wait(500);
      });

      expect(foundCopyAlert).toBeVisible();

      expect(mockWriteText).toHaveBeenCalledWith("pauibanez2001@gmail.com");
    });
  });

  describe("When it's instanciated and the open email button is clicked", () => {
    test("Then it should call mockNavigate", () => {
      const expectedButton =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";
      const expectedOpenLink =
        "Contact.contactInfo.itemValues.openEmail newscreen";

      renderInRouter(<EmailMenu />);

      const foundButton = screen.getByRole("button", {
        name: expectedButton,
      });

      act(() => {
        userEvent.click(foundButton);
      });

      const foundEmailLink = screen.getByRole("link", {
        name: expectedOpenLink,
      });

      act(() => {
        userEvent.click(foundEmailLink);
      });

      expect(foundEmailLink).toBeInTheDocument();
      expect(foundEmailLink).not.toBeVisible();
    });
  });
  describe("When it's instanciated, opened and the user clicks on another side", () => {
    test("Then it should close the menu", () => {
      const expectedButton =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";

      const expectedOpenLink =
        "Contact.contactInfo.itemValues.openEmail newscreen";

      renderInRouter(
        <>
          <p>Other</p>
          <EmailMenu />
        </>
      );

      const foundButton = screen.getByRole("button", {
        name: expectedButton,
      });

      act(() => {
        userEvent.click(foundButton);
      });

      const foundEmailLink = screen.getByRole("link", {
        name: expectedOpenLink,
      });
      expect(foundEmailLink).toBeVisible();

      const foundOther = screen.getByText("Other");

      act(() => {
        userEvent.click(foundOther);
      });

      expect(foundEmailLink).not.toBeVisible();
    });
  });
});
