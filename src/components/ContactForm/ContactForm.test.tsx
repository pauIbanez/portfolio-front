/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { MessageType } from "../../Types/ContactFormValues";

describe("Given the ContactForm component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 6 inputFields and a selectField", () => {
      const expectedInputs = 6;
      render(<ContactForm onSubmit={() => null} />);

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText("Message Type");

      expect(foundInputs.length).toBe(expectedInputs);
      expect(foundSelect).toBeInTheDocument();
    });
  });

  describe("When it's instanciated, filled and submitted", () => {
    test("Then it should call onSubmit", async () => {
      const onSubmit = jest.fn();
      render(<ContactForm onSubmit={onSubmit} />);

      const foundInputs = screen.getAllByRole("textbox");
      const foundSelect = screen.getByLabelText("Message Type");

      act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });

        foundInputs.forEach((input) => {
          userEvent.type(input, "someemail@email.com");
        });
      });

      const foundSubmitButton = screen.getByRole("button", {
        name: "Send Message",
      });
      act(() => {
        userEvent.click(foundSubmitButton);
      });

      await waitFor(() => expect(onSubmit).toHaveBeenCalled());
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  describe("When it's instanciated, a messageType with variableField is selected and then anotherone without variab le field", () => {
    test("Then it should change oppacity to 1 and then 0", async () => {
      render(<ContactForm onSubmit={() => null} />);

      let foundVisibleWrapper = screen.getByTestId("visible-wrapper");
      const foundSelect = screen.getByLabelText("Message Type");

      expect(foundVisibleWrapper).toHaveStyle("opacity: 0;");
      act(() => {
        fireEvent.change(foundSelect, {
          target: { value: MessageType.JobOportunity },
        });
      });

      await waitFor(() =>
        expect(foundVisibleWrapper).toHaveStyle("opacity: 1;")
      );
      expect(foundVisibleWrapper).toHaveStyle("opacity: 1;");

      act(() => {
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
});
