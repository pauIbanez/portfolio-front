/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { MessageType } from "../../../Types/ContactFormValues";
import { ErrorrContextProvider } from "react-errorr";
import ResponsiveContext from "../../../contexts/responsiveContext/ResponsiveContext.contextCreator";

describe("Given the ContactForm component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 6 inputFields and a selectField", () => {
      const expectedInputs = 6;
      render(<ContactForm onSubmit={() => null} />);

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText(
        "Contact.contactForm.labels.messageType"
      );

      expect(foundInputs.length).toBe(expectedInputs);
      expect(foundSelect).toBeInTheDocument();
    });
  });

  describe("When it's instanciated, filled and submitted", () => {
    test("Then it should call onSubmit", async () => {
      const onSubmit = jest.fn();
      render(<ContactForm onSubmit={onSubmit} />);

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText(
        "Contact.contactForm.labels.messageType"
      );

      await act(() => {
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

      await act(() => {
        userEvent.click(foundSubmitButton);
      });

      await waitFor(() => expect(onSubmit).toHaveBeenCalled());
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  describe("When it's instanciated, a messageType with variableField is selected and then anotherone without variable field", () => {
    test("Then it should change oppacity to 1 and then 0", async () => {
      render(<ContactForm onSubmit={() => null} />);

      let foundVisibleWrapper = screen.getByTestId("visible-wrapper");
      const foundSelect = screen.getByLabelText(
        "Contact.contactForm.labels.messageType"
      );

      expect(foundVisibleWrapper).toHaveStyle("opacity: 0;");
      await act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });
      });

      await waitFor(() =>
        expect(foundVisibleWrapper).toHaveStyle("opacity: 1;")
      );
      expect(foundVisibleWrapper).toHaveStyle("opacity: 1;");

      await act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.GeneralQuestion },
        });
      });

      await waitFor(() =>
        expect(foundVisibleWrapper).toHaveStyle("opacity: 0;")
      );
      expect(foundVisibleWrapper).toHaveStyle("opacity: 0;");
    });
  });

  describe("When a field is touched and blured without typing", () => {
    test("Then it should show an error", async () => {
      const expectedStyle = {
        border: "2px solid red",
      };

      render(
        <ErrorrContextProvider>
          <ContactForm onSubmit={() => null} />
        </ErrorrContextProvider>
      );

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText(
        "Contact.contactForm.labels.messageType"
      );

      await act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });
        foundInputs.forEach((input) => {
          if (input.getAttribute("placeholder") !== "Placeholder") {
            userEvent.type(input, "m@a");
          }
        });
      });

      await act(() => {
        userEvent.clear(foundInputs[0]);
      });
      await act(() => {
        userEvent.clear(foundInputs[1]);
      });

      expect(foundInputs[0]).toHaveStyle(expectedStyle);
    });
  });

  describe("When a field is touched and blured without typing and then typed again", () => {
    test("Then it should show remove the error", async () => {
      const expectedStyle = {
        border: "none",
      };

      render(
        <ErrorrContextProvider>
          <ContactForm onSubmit={() => null} />
        </ErrorrContextProvider>
      );

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText(
        "Contact.contactForm.labels.messageType"
      );

      await act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });
        foundInputs.forEach((input) => {
          if (input.getAttribute("placeholder") !== "Placeholder") {
            userEvent.type(input, "m@a");
          }
        });
      });

      await act(() => {
        userEvent.clear(foundInputs[0]);
      });

      await act(() => {
        userEvent.type(foundInputs[0], "m@a");
      });

      expect(foundInputs[0]).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's viewed ar a low breakpoint", () => {
    test("Then it should render the button with height 35", async () => {
      const expectedStyle = {
        height: "35px",
      };

      render(
        <ResponsiveContext.Provider value={{ currentWidthBreakPoint: 3 }}>
          <ContactForm onSubmit={() => null} />
        </ResponsiveContext.Provider>
      );

      const foundSubmitButton = screen.getByRole("button", {
        name: "Contact.contactForm.sendMessage",
      });

      expect(foundSubmitButton).toHaveStyle(expectedStyle);
    });
  });
});
