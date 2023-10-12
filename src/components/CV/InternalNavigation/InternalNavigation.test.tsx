import { RefObject } from "react";
import ScrollItem from "../../../Types/ScrollItem";
import ScrollContextData from "../../../Types/contextData/ScrollContextData";
import { render, screen } from "@testing-library/react";
import ScrollContext from "../../../contexts/scrollContext/ScrollContext.contextCreator";
import InternalNavigation from "./InternalNavigation";
import userEvent from "@testing-library/user-event";
import toRGB from "../../../utils/toRGB/toRGB";
import Colors from "../../../data/style/Colors";

describe("Given the InternalNavigation component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render all the sections provided by the scrollContext", () => {
      const items: ScrollItem[] = [
        {
          ref: null as unknown as RefObject<HTMLDivElement>,
          name: "testName 1",
        },
        {
          ref: null as unknown as RefObject<HTMLDivElement>,
          name: "testName 2",
        },
      ];

      const mockScrollToItem = jest.fn();

      const contextValue: ScrollContextData = {
        getItems: () => items,
        items,
        loadItem: () => null,
        updateItem: () => null,
        scrollToItem: mockScrollToItem,
        currentActive: "",
      };

      render(
        <ScrollContext.Provider value={contextValue}>
          <InternalNavigation />
        </ScrollContext.Provider>
      );

      items.forEach((item) => {
        const foundItem = screen.getByText(item.name);

        expect(foundItem).toBeInTheDocument();
      });
    });
  });
  describe("When it's instanciated and one of the items is clicked on", () => {
    test("Then it should call the scrollToItem function", () => {
      const items: ScrollItem[] = [
        {
          ref: null as unknown as RefObject<HTMLDivElement>,
          name: "testName 1",
        },
        {
          ref: null as unknown as RefObject<HTMLDivElement>,
          name: "testName 2",
        },
      ];

      const mockScrollToItem = jest.fn();

      const contextValue: ScrollContextData = {
        getItems: () => items,
        items,
        loadItem: () => null,
        updateItem: () => null,
        scrollToItem: mockScrollToItem,
        currentActive: "",
      };

      render(
        <ScrollContext.Provider value={contextValue}>
          <InternalNavigation />
        </ScrollContext.Provider>
      );

      items.forEach((item) => {
        const foundItem = screen.getByText(item.name);

        userEvent.click(foundItem);

        expect(mockScrollToItem).toHaveBeenCalledWith(item.name);
      });
    });
  });

  describe("When it's instanciated with a currentActive", () => {
    test("Then it should render the item background color as the disabledMain", () => {
      const items: ScrollItem[] = [
        {
          ref: null as unknown as RefObject<HTMLDivElement>,
          name: "asdasda",
        },
        {
          ref: null as unknown as RefObject<HTMLDivElement>,
          name: "sasa2",
        },
      ];

      const expectedStyle = {
        backgroundColor: toRGB(Colors.disabledMain),
      };

      const contextValue: ScrollContextData = {
        getItems: () => items,
        items,
        loadItem: () => null,
        scrollToItem: () => null,
        updateItem: () => null,
        currentActive: items[0].name,
      };

      render(
        <ScrollContext.Provider value={contextValue}>
          <InternalNavigation />
        </ScrollContext.Provider>
      );

      const foundItems = screen.getAllByRole("button");

      expect(foundItems[0]).toHaveStyle(expectedStyle);
    });
  });
});
