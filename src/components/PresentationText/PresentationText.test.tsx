import { render, screen } from "@testing-library/react";
import PresentationText from "./PresentationText";
import userEvent from "@testing-library/user-event";

describe("Given the PresentationText component", () => {
  describe("When it's intanciated with a title, text and button data", () => {
    test("Then it should render the passed title and texts", () => {
      const title = "title";
      const text = "text test";
      const buttonName = "Button content";

      const buttonData = {
        content: <p>{buttonName}</p>,
        onClick: () => null,
      };

      render(
        <PresentationText title={title} text={text} button={buttonData} />
      );

      const foundTitle = screen.getByRole("heading", { level: 2, name: title });
      const foundText = screen.getByText(text);
      const foundButton = screen.getByRole("button", { name: buttonName });

      expect(foundTitle).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
      expect(foundButton).toBeInTheDocument();
    });

    test("Then it should render title with font weight 700 and size 30px", () => {
      const title = "title";
      const expectedStyle = {
        fontWeight: 700,
        fontSize: "30px",
      };

      render(
        <PresentationText
          title={title}
          text=""
          button={{ content: <></>, onClick: () => null }}
        />
      );

      const foundTitle = screen.getByRole("heading", { level: 2, name: title });

      expect(foundTitle).toBeInTheDocument();
      expect(foundTitle).toHaveStyle(expectedStyle);
    });
  });
  describe("When it's intanciated and the button is pressed", () => {
    test("Then it should call the passed onClick button function", () => {
      const title = "title";
      const text = "text test";
      const buttonName = "Button content";

      const buttonData = {
        content: <p>{buttonName}</p>,
        onClick: jest.fn(),
      };

      render(
        <PresentationText title={title} text={text} button={buttonData} />
      );

      const foundButton = screen.getByRole("button", { name: buttonName });

      userEvent.click(foundButton);

      expect(buttonData.onClick).toHaveBeenCalled();
    });
  });
});
