import { render, screen, within } from "@testing-library/react";
import RatedSection from "./RatedSection";

describe("Given the RatedSection component", () => {
  describe("When it's instanciated passing a title", () => {
    test("Then it should render the title", () => {
      const title = "test title";

      render(<RatedSection title={title} items={[]} />);

      const foundTitle = screen.getByText(title);

      expect(foundTitle).toBeInTheDocument();
    });
  });

  describe("When it's instanciated passing items as notRating", () => {
    test("Then it should render the item name and text", () => {
      const items = [
        {
          name: "test1",
          text: "text1",
        },
        {
          name: "test2",
          text: "text2",
        },
      ];

      render(<RatedSection title={"title"} items={items} notRated={true} />);

      items.forEach((item) => {
        const foundName = screen.getByText(item.name);
        const foundText = screen.getByText(item.text);

        expect(foundName).toBeInTheDocument();
        expect(foundText).toBeInTheDocument();
      });
    });
  });

  describe("When it's instanciated passing items", () => {
    test("Then it should render the item name and rating stars", () => {
      const items = [
        {
          name: "test1",
          rating: 3,
        },
        {
          name: "test2",
          rating: 5,
        },
      ];

      render(<RatedSection title={"title"} items={items} />);

      items.forEach((item, index) => {
        const foundItem = screen.getByTestId(`item-${index}`);
        const foundName = screen.getByText(item.name);
        const foundStars = within(foundItem).getAllByRole("img");
        const foundFullStars = within(foundItem).getAllByAltText(/\bFull\b/g);

        expect(foundName).toBeInTheDocument();
        expect(foundStars.length).toBe(5);
        expect(foundFullStars.length).toBe(item.rating);
      });
    });
  });
});
