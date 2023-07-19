import { screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { renderInRouter } from "../../setupTests";
import toRGB from "../../utils/toRGB/toRGB";
import Colors from "../../data/style/Colors";

beforeEach(() => {
  jest.resetAllMocks();
});

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
        color: toRGB(Colors.main),
      };
      renderInRouter(<NavBar />);

      const foundHomeLink = screen.getByRole("link", { name: expectedPage });

      expect(foundHomeLink).toHaveStyle(expectedStyle);
    });
  });

  describe("When it's intanciated in the page contacts page", () => {
    test("Then it should render the contact button as active", () => {
      const linkName = "navBar.contact";
      const expectedStyle = {
        color: toRGB(Colors.main),
        backgroundColor: "white",
        border: `3px solid ${Colors.main}`,
      };

      renderInRouter(<NavBar />, ["/contact"]);

      const foundLink = screen.getByRole("link", { name: linkName });

      expect(foundLink).toHaveStyle(expectedStyle);
    });
  });
});
