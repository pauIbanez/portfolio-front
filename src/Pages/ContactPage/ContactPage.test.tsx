/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from "@testing-library/react";
import ContactPage from "./ContactPage";
import { renderInRouter } from "../../setupTests";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";

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

  describe("When the email button is clicked", () => {
    test("Then it should render a butotn and a Link", async () => {
      const expectedButtonName =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";
      const expectedCopyButtonName = "Contact.contactInfo.itemValues.copyEmail";
      const expectedEmailLinkName =
        "Contact.contactInfo.itemValues.openEmail newscreen";

      renderInRouter(<ContactPage />);

      const foundEmailButton = screen.getByRole("button", {
        name: expectedButtonName,
      });
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        userEvent.click(foundEmailButton);
        await wait(100);
      });

      const foundCopyEmailButton = screen.getByRole("button", {
        name: expectedCopyButtonName,
      });
      const foundEmailLink = screen.getByRole("link", {
        name: expectedEmailLinkName,
      });

      expect(foundCopyEmailButton).toBeInTheDocument();
      expect(foundEmailLink).toBeInTheDocument();
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe("When the copy email button is clicked", () => {
    const mockWriteText = jest.fn();
    beforeAll(() => {
      (navigator.clipboard as any) = { writeText: mockWriteText };
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });
    test("Then it should coppy the email 'pauibanez2001@gmail.com' to the clipboard", async () => {
      const expectedButtonName =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";
      const expectedCopyButtonName = "Contact.contactInfo.itemValues.copyEmail";
      const expectedTextToCoppy = "pauibanez2001@gmail.com";

      renderInRouter(<ContactPage />);

      const foundEmailButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      await act(async () => {
        userEvent.click(foundEmailButton);
        await wait(50);
        userEvent.click(foundEmailButton);
      });

      const foundCopyEmailButton = screen.getByRole("button", {
        name: expectedCopyButtonName,
      });

      await act(async () => {
        userEvent.click(foundCopyEmailButton);
        await wait(100);
      });

      expect(mockWriteText).toHaveBeenCalledWith(expectedTextToCoppy);

      await act(async () => {
        await wait(200);
      });
    });
  });
});
