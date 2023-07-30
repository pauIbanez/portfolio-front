import { render, screen } from "@testing-library/react";
import ReferencesSection from "./ReferencesSection";

const mockSections = {
  references: {
    title: "CV.sections.references.title",
    items: [
      {
        name: "name",
        position: "",
        email: "",
        linkedIn: "",
        picture: "",
        letter: "",
      },
      {
        name: "name2",
        position: "",
        email: "",
        linkedIn: "",
        picture: "",
        letter: "",
      },
    ],
  },
};

jest.mock("../../../../hooks/useSections", () => () => ({
  sections: mockSections,
}));

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("Given the ReferencesSection component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render an h3 with 'CV.sections.references.title'", () => {
      const expectedTitle = "CV.sections.references.title";

      render(<ReferencesSection />);

      const foundTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(foundTitle).toBeInTheDocument();
    });
  });

  describe("When it's instanciated with more than 1 letter", () => {
    test("Then it should render a line in between each section", () => {
      render(<ReferencesSection />);

      const foundLine = screen.getByTestId("line");

      expect(foundLine).toBeInTheDocument();
    });
  });
});
