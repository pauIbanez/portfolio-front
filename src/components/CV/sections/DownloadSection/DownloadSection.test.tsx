/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import DownloadSection from "./DownloadSection";
import { ErrorrContextProvider } from "react-errorr";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Given the DownloadSection component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the title 'CV.sections.download.title'", () => {
      render(<DownloadSection />);

      const foundTitle = screen.getByRole("heading", {
        name: "CV.sections.download.title",
        level: 3,
      });

      expect(foundTitle).toBeInTheDocument();
    });
  });
  describe("When it's instanciated and the download button is pressed without checking the disclaimer", () => {
    test("Then it should render the title checkmark with a red border", () => {
      const expectedStyle = {
        border: "2px solid red",
      };

      render(
        <ErrorrContextProvider>
          <DownloadSection />
        </ErrorrContextProvider>
      );

      const foundDownloadButton = screen.getAllByRole("button")[0];
      act(() => {
        userEvent.click(foundDownloadButton);
      });

      // eslint-disable-next-line testing-library/no-node-access
      const foundCheckMark = document.querySelector(
        '[data-testid="checkmark"]'
      );

      const computedStyle = window.getComputedStyle(foundCheckMark!);

      expect(computedStyle).toEqual(expect.objectContaining(expectedStyle));
    });
  });
  describe("When it's instanciated and the download button is pressed without checking the disclaimer, then the checkmark is pressed", () => {
    test("Then it should deactivate the buttons and when the checkmark is pressed, adctivate them again", () => {
      render(
        <ErrorrContextProvider>
          <DownloadSection />
        </ErrorrContextProvider>
      );

      let foundDownloadButton = screen.getAllByRole("button")[0];
      const foundCheckMark = screen.getByTestId("checkmark");

      act(() => {
        userEvent.click(foundDownloadButton);
      });

      foundDownloadButton = screen.getAllByRole("button")[0];
      expect(foundDownloadButton).toBeDisabled();

      act(() => {
        userEvent.click(foundCheckMark);
      });

      foundDownloadButton = screen.getAllByRole("button")[0];
      expect(foundDownloadButton).not.toBeDisabled();
    });
  });

  describe("When it's instanciated and the download button is pressed after checking the disclaimer", () => {
    test("Then it should TODO call fetch bla bla", () => {
      render(
        <ErrorrContextProvider>
          <DownloadSection />
        </ErrorrContextProvider>
      );

      const foundDownloadButton = screen.getAllByRole("button")[0];
      const foundCheckMark = screen.getByTestId("checkmark");
      act(() => {
        userEvent.click(foundCheckMark);
        userEvent.click(foundDownloadButton);
      });
    });
  });
});
