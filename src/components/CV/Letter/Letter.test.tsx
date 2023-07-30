import { render, screen } from "@testing-library/react";
import Letter from "./Letter";

describe("Given the Letter component", () => {
  describe("When it's instanciated passing the letter info", () => {
    test("Then it should render the letter text", () => {
      const letter = {
        email: "",
        name: "",
        linkedIn: "",
        position: "",
        picture: "",
        letter: "some letter text",
      };

      render(<Letter item={letter} />);

      const foundLetter = screen.getByText(letter.letter);

      expect(foundLetter).toBeInTheDocument();
    });
    test("Then it should render the name as a heading", () => {
      const letter = {
        email: "",
        name: "the name of someone",
        linkedIn: "",
        position: "",
        picture: "",
        letter: "some letter text",
      };

      render(<Letter item={letter} />);

      const foundName = screen.getByRole("heading", {
        name: letter.name,
        level: 4,
      });

      expect(foundName).toBeInTheDocument();
    });
    test("Then it should render an image with the alt being the name", () => {
      const letter = {
        email: "",
        name: "the name of someone",
        linkedIn: "",
        position: "",
        picture: "",
        letter: "some letter text",
      };

      render(<Letter item={letter} />);

      const foundImg = screen.getByAltText(letter.name);

      expect(foundImg).toBeInTheDocument();
    });
  });
});
