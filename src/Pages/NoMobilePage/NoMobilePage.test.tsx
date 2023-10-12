import { render, screen } from "@testing-library/react";
import NoMobilePage from "./NoMobilePage";
import userEvent from "@testing-library/user-event";

describe("Given the NoMobile Page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the disclaimer", () => {
      const expectedTitle = "NoMobile.title";
      const expectedText = "NoMobile.text";

      render(<NoMobilePage onClick={() => null} />);

      const foundTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });
      const foundText = screen.getByText(expectedText);

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
    });

    test("Then it should render a button", () => {
      const expectedButtonName = "NoMobile.button";

      render(<NoMobilePage onClick={() => null} />);

      const foundButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(foundButton).toBeInTheDocument();
    });
  });
  describe("When the button is clcked", () => {
    test("Then it should call the passed onClick func", () => {
      const expectedButtonName = "NoMobile.button";
      const onClick = jest.fn();

      render(<NoMobilePage onClick={onClick} />);

      const foundButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      userEvent.click(foundButton);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
