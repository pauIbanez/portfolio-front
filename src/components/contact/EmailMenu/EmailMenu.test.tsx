import { screen } from "@testing-library/react";
import EmailMenu from "./EmailMenu";
import { renderInRouter } from "../../../setupTests";

describe("Given the EmailMenu component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render an email button", () => {
      const expectedButton =
        "email Contact.contactInfo.itemNames.email: pauibanez2001@gmail.com";

      renderInRouter(<EmailMenu />);

      const foundButton = screen.getByRole("button", { name: expectedButton });

      expect(foundButton).toBeInTheDocument();
    });
  });
});
