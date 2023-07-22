import { RefObject } from "react";
import ScrollItem from "../../../Types/ScrollItem";
import ScrollContextData from "../../../Types/contextData/ScrollContextData";
import { render, screen } from "@testing-library/react";
import ScrollContext from "../../../contexts/scrollContext/ScrollContext.contextCreator";
import InternalNavigation from "./InternalNavigation";
import userEvent from "@testing-library/user-event";

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
        items: [],
        loadItem: () => null,
        scrollToItem: mockScrollToItem,
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
        items: [],
        loadItem: () => null,
        scrollToItem: mockScrollToItem,
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
});
