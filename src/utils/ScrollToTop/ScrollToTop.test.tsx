import ScrollToTop from "./ScrollToTop";
import { renderInRouter } from "../../setupTests";

describe("Given the ScrollToTop component", () => {
  describe("When it's rendered", () => {
    test("Then it should call window.scrollTo", () => {
      renderInRouter(<ScrollToTop />);

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
