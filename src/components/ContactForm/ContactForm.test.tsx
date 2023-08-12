import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Given the ContactForm component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 6 inputFields", () => {
      const expectedInputs = 6;
      render(<ContactForm onSubmit={() => null} />);

      const foundInputs = screen.getAllByRole("textbox");

      expect(foundInputs.length).toBe(expectedInputs);
    });
  });
});
