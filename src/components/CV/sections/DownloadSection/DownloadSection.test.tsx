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
    test("Then the buttons should be disabled and the checkmark with a red border", () => {
      const expectedStyle = {
        border: "2px solid red",
      };

      render(<DownloadSection />);

      const foundDownloadButton = screen.getAllByRole("button")[0];
      // eslint-disable-next-line testing-library/no-node-access
      const foundCheckMark = document.querySelector(
        '[data-testid="checkmark"]'
      );

      const computedStyle = window.getComputedStyle(foundCheckMark!);

      expect(computedStyle).toEqual(expect.objectContaining(expectedStyle));
      expect(foundDownloadButton).toBeDisabled();
    });
  });

  describe("When it's instanciated and the cherckmark is pressed", () => {
    test("Then it should activate the buttons", () => {
      render(
        <ErrorrContextProvider>
          <DownloadSection />
        </ErrorrContextProvider>
      );

      const foundDownloadButton = screen.getAllByRole("button")[0];
      const foundCheckMark = screen.getByTestId("checkmark");
      act(() => {
        userEvent.click(foundCheckMark);
      });

      expect(foundDownloadButton).not.toBeDisabled();
    });
  });
});
