/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from "@testing-library/react";
import App from "./App";
import { renderInRouter } from "./setupTests";
import ResponsiveContext from "./contexts/responsiveContext/ResponsiveContext.contextCreator";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Given App", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the home page title", () => {
      const expectedTitle = "Home.title";

      renderInRouter(<App />);

      const foundHomeTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(foundHomeTitle).toBeInTheDocument();
    });
  });

  describe("When it's instanciated with a language stored", () => {
    test("Then it should render the home page title", () => {
      localStorage.setItem("locale", "es");
      const expectedTitle = "Home.title";

      renderInRouter(<App />);

      const foundHomeTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(foundHomeTitle).toBeInTheDocument();
      localStorage.clear();
    });
  });

  describe("When it's instanciate as mobile", () => {
    test("Then it should render the noMobile page", () => {
      const expectedTitle = "NoMobile.title";

      renderInRouter(
        <ResponsiveContext.Provider value={{ currentWidthBreakPoint: 4 }}>
          <App />
        </ResponsiveContext.Provider>
      );

      const foundNoMobileTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(foundNoMobileTitle).toBeInTheDocument();
    });
  });

  describe("When it's instanciate as mobile and the user clicks on 'Visit anyway'", () => {
    test("Then it should render the home page title", () => {
      const expectedTitle = "Home.title";
      const expectedButton = "NoMobile.button";

      renderInRouter(
        <ResponsiveContext.Provider value={{ currentWidthBreakPoint: 4 }}>
          <App />
        </ResponsiveContext.Provider>
      );

      const foundButton = screen.getByRole("button", { name: expectedButton });

      act(() => {
        userEvent.click(foundButton);
      });

      const foundHomeTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(foundHomeTitle).toBeInTheDocument();
    });
  });
});
