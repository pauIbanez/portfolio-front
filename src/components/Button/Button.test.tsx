import { screen, render } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import Colors from "../../data/style/Colors";
import toRGB from "../../utils/toRGB/toRGB";

describe("Given the Button component", () => {
  describe("When it's intanciated passing a text and a function", () => {
    test("Then it should render a button with the passed text", () => {
      const text = "test button";

      render(<Button onClick={() => {}}>{text}</Button>);

      const foundButton = screen.getByRole("button", { name: text });

      expect(foundButton).toBeInTheDocument();
    });
    test("Then it should call the function when pressed", () => {
      const text = "test button";
      const onClick = jest.fn();

      render(<Button onClick={onClick}>{text}</Button>);

      const foundButton = screen.getByRole("button", { name: text });
      userEvent.click(foundButton);

      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("When it's intanciated as disabled", () => {
    test("Then it should not call the function", () => {
      const text = "test button";
      const onClick = jest.fn();

      render(
        <Button onClick={onClick} disabled>
          {text}
        </Button>
      );

      const foundButton = screen.getByRole("button", { name: text });
      userEvent.click(foundButton);

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("When it's intanciated passing a specific style", () => {
    test("Then it should render the a button with the passed styles", () => {
      const text = "test button";
      const style = {
        padding: 15,
        fontSize: 11,
        fontWeight: 700,
        height: 13,
        radius: 15,
        width: 30,
      };
      const expectedStyle = {
        padding: "0 15px 0 15px",
        fontSize: "11px",
        fontWeight: 700,
        height: "13px",
        borderRadius: "15px",
        width: "30px",
      };

      render(
        <Button onClick={() => {}} disabled styleObject={style}>
          {text}
        </Button>
      );

      const foundButton = screen.getByRole("button", { name: text });

      expect(foundButton).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's intanciated as reversed", () => {
    test("Then it should render the a button with reversed colors", () => {
      const text = "test button";

      const expectedStyle = {
        color: toRGB(Colors.main),
        backgroundColor: "white",
        border: `3px solid ${Colors.main}`,
      };

      render(
        <Button onClick={() => {}} reversed={true}>
          {text}
        </Button>
      );

      const foundButton = screen.getByRole("button", { name: text });

      expect(foundButton).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's intanciated as active", () => {
    test("Then it should render the a button with reversed colors", () => {
      const text = "test button";

      const expectedStyle = {
        color: toRGB(Colors.main),
        backgroundColor: "white",
        border: `3px solid ${Colors.main}`,
      };

      render(
        <Button onClick={() => {}} active={true}>
          {text}
        </Button>
      );

      const foundButton = screen.getByRole("button", { name: text });

      expect(foundButton).toHaveStyle(expectedStyle);
    });
  });
});
