import { screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { renderInRouter } from "../../setupTests";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "/home" }),
}));

describe("Given the NavBar component", () => {
  describe("When it's intanciated in the page home", () => {
    test("Then it should render the pages", () => {
      const expectedPages = [
        "navBar.home",
        "navBar.aboutme",
        "navBar.projects",
        "navBar.cv",
        "navBar.contact",
      ];

      renderInRouter(<NavBar />);

      const foundLinks = screen.getAllByRole("link");

      let foundPages = 0;
      foundLinks.forEach((link) => {
        const inPages = expectedPages.includes(link.textContent!);
        expect(inPages).toBe(true);

        if (inPages) {
          foundPages += 1;
        }
      });
      expect(foundPages).toBe(expectedPages.length);
    });

    test("Then it should render the home link as highlighted", () => {
      const expectedPage = "navBar.home";
      const expectedStyle = {
        color: "white",
      };
      renderInRouter(<NavBar />);

      const foundHomeLink = screen.getByRole("link", { name: expectedPage });

      expect(foundHomeLink).toHaveStyle(expectedStyle);
    });
  });
});
