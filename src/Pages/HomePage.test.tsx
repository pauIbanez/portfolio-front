import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";
import userEvents from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Given the Home Page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the heading 'Home.content.heading'", () => {
      const expectedHeading = "Home.content.heading";

      render(<HomePage />);

      const foundHeading = screen.getByRole("heading", {
        name: expectedHeading,
        level: 2,
      });

      expect(foundHeading).toBeInTheDocument();
    });

    test("Then it should render an image with alt 'Pau Ibáñez'", () => {
      const expectedImage = "Pau Ibáñez";

      render(<HomePage />);

      const foundImage = screen.getByRole("img", {
        name: expectedImage,
      });

      expect(foundImage).toBeInTheDocument();
    });
  });

  describe("When it's instanciated and the 'My Portfolio' button is pressed", () => {
    test("Then it should call mockNavigate with '/projects'", () => {
      const expectedPath = "/projects";

      render(<HomePage />);

      const foundButton = screen.getByRole("button");
      userEvents.click(foundButton);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
