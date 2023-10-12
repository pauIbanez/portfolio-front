/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, screen } from "@testing-library/react";
import ContactPage from "./ContactPage";
import { renderInRouter } from "../../setupTests";
import ResponsiveContext from "../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import { act } from "react-dom/test-utils";
import { MessageType } from "../../Types/ContactFormValues";
import userEvent from "@testing-library/user-event";

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

  describe("When it's intanciated with a smaller breakpoint", () => {
    test("Then it should render as a column", () => {
      const expectedStytle = {
        flexDirection: "column",
      };

      renderInRouter(
        <ResponsiveContext.Provider value={{ currentWidthBreakPoint: 2 }}>
          <ContactPage />
        </ResponsiveContext.Provider>
      );

      const foundContactHolder = screen.getByTestId("contact-holder");

      expect(foundContactHolder).toHaveStyle(expectedStytle);
    });
  });

  describe("When it's intanciated and the form is sent with sucess", () => {
    test("Then it should render a button with name 'Writte another!'", async () => {
      const expectedButtonName = "Contact.messageSent.button.success";
      const expectedFormSelect = "Contact.contactForm.labels.messageType";

      renderInRouter(<ContactPage />);

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText(expectedFormSelect);

      act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });

        foundInputs.forEach((input) => {
          if (input.getAttribute("placeholder") !== "Placeholder") {
            userEvent.type(input, "c@a");
          }
        });
      });

      const foundSubmitButton = screen.getByRole("button", {
        name: "Contact.contactForm.sendMessage",
      });
      act(() => {
        userEvent.click(foundSubmitButton);
      });

      const foundSuccessButton = await screen.findByRole("button", {
        name: expectedButtonName,
      });

      expect(foundSuccessButton).toBeInTheDocument();
    });
  });

  describe("When it's intanciated and the form is sent without sucess", () => {
    test("Then it should render a button with name 'Try again'", async () => {
      const expectedButtonName = "Contact.messageSent.button.fail";
      const expectedFormSelect = "Contact.contactForm.labels.messageType";

      renderInRouter(<ContactPage />);

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText(expectedFormSelect);

      act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });
        foundInputs.forEach((input) => {
          if (input.getAttribute("placeholder") !== "Placeholder") {
            userEvent.type(input, "i@a");
          }
        });
      });

      const foundSubmitButton = screen.getByRole("button", {
        name: "Contact.contactForm.sendMessage",
      });
      act(() => {
        userEvent.click(foundSubmitButton);
      });

      const foundFailButton = await screen.findByRole("button", {
        name: expectedButtonName,
      });

      expect(foundFailButton).toBeInTheDocument();
    });
  });
  describe("When it's intanciated and fetch fails", () => {
    test("Then it should render a button with name 'Try again'", async () => {
      const expectedButtonName = "Contact.messageSent.button.fail";
      const expectedFormSelect = "Contact.contactForm.labels.messageType";

      renderInRouter(<ContactPage />);

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText(expectedFormSelect);

      act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });
        foundInputs.forEach((input) => {
          if (input.getAttribute("placeholder") !== "Placeholder") {
            userEvent.type(input, "m@a");
          }
        });
      });

      const foundSubmitButton = screen.getByRole("button", {
        name: "Contact.contactForm.sendMessage",
      });
      act(() => {
        userEvent.click(foundSubmitButton);
      });

      const foundFailButton = await screen.findByRole("button", {
        name: expectedButtonName,
      });

      expect(foundFailButton).toBeInTheDocument();
    });
  });

  describe("When it's intanciated and the form is sent with sucess, and the user presses on 'Write another!'", () => {
    test("Then it should render the form", async () => {
      const expectedButtonName = "Contact.messageSent.button.success";
      const expectedFormSelect = "Contact.contactForm.labels.messageType";

      renderInRouter(<ContactPage />);

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText(expectedFormSelect);

      act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });

        foundInputs.forEach((input) => {
          if (input.getAttribute("placeholder") !== "Placeholder") {
            userEvent.type(input, "c@a");
          }
        });
      });

      const foundSubmitButton = screen.getByRole("button", {
        name: "Contact.contactForm.sendMessage",
      });
      act(() => {
        userEvent.click(foundSubmitButton);
      });

      const foundSuccessButton = await screen.findByRole("button", {
        name: expectedButtonName,
      });

      act(() => {
        userEvent.click(foundSuccessButton);
      });

      const foundForm = screen.getByRole("form");

      expect(foundForm).toBeInTheDocument();
    });
  });
});
