import { screen } from "@testing-library/react";
import { renderInRouter } from "../../../setupTests";
import BackToProjects from "./BackToProjects";
import ScrollRestorationContext from "../../../contexts/ScrollRestoration/ScrollRestoration.contextCreator";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe("Given the BackToProjects component", () => {
  describe("When it's intanciated", () => {
    test("Then it should render a button", () => {
      const expectedName = "Back to projects";

      renderInRouter(<BackToProjects />);

      const foundButton = screen.getByRole("button", { name: expectedName });

      expect(foundButton).toBeInTheDocument();
    });
  });

  describe("When it's intanciated and the button is clicked", () => {
    test("Then it should call navigate and scrollRestoration setScrollToMain", () => {
      const expectedName = "Back to projects";
      const mockSetScrollToMain = jest.fn();
      renderInRouter(
        <ScrollRestorationContext.Provider
          value={{ scrollToMain: true, setScrollToMain: mockSetScrollToMain }}
        >
          <BackToProjects />
        </ScrollRestorationContext.Provider>
      );

      const foundButton = screen.getByRole("button", { name: expectedName });
      userEvent.click(foundButton);

      expect(mockSetScrollToMain).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/projects");
    });
  });
});
