import { render, screen } from "@testing-library/react";
import CVListItem from "./CVListItem";

describe("Given the CVListItem component", () => {
  describe("When it's instanciated passing necessary info", () => {
    test("Then it should render the logo, name, location, concept and dates", () => {
      const item = {
        name: "test item",
        location: "Test location, Computer",
        concept: "Here i tested a component",
        image: "testImage.svg",
        dates: {
          startDate: "Jul 2023",
          endDate: "Jul 2023",
        },
        textSections: [],
      };

      render(<CVListItem item={item} order={0} />);

      const foundName = screen.getByRole("heading", {
        level: 4,
        name: item.name,
      });
      const foundLocation = screen.getByText(item.location);
      const foundConcept = screen.getByText(item.concept);
      const foundLogo = screen.getByAltText(`${item.name} logo`);
      const foundDate = screen.getByText(
        `${item.dates.startDate} - ${item.dates.endDate}`
      );

      expect(foundName).toBeInTheDocument();
      expect(foundLocation).toBeInTheDocument();
      expect(foundConcept).toBeInTheDocument();
      expect(foundLogo).toBeInTheDocument();
      expect(foundDate).toBeInTheDocument();
    });
  });

  describe("When it's instanciated passing text sections", () => {
    test("Then it should render the titles and text from them", () => {
      const item = {
        name: "test item",
        location: "Test location, Computer",
        concept: "Here i tested a component",
        image: "testImage.svg",
        dates: {
          startDate: "Jul 2023",
          endDate: "Jul 2023",
        },
        textSections: [
          {
            title: "test title",
            text: "testText",
          },
          {
            title: "test title2",
            text: "testText2",
          },
        ],
      };

      render(<CVListItem item={item} order={0} />);

      item.textSections.forEach((section) => {
        const foundTitle = screen.getByRole("heading", {
          level: 5,
          name: section.title,
        });
        const foundText = screen.getByText(section.text);

        expect(foundTitle).toBeInTheDocument();
        expect(foundText).toBeInTheDocument();
      });
    });
  });
});
