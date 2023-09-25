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

    test("Then it should render a coppy email button and a open email link, but not visible", () => {
      const expectedCopyButton = "Contact.contactInfo.itemValues.copyEmail";
      const expectedOpenLink =
        "Contact.contactInfo.itemValues.openEmail newscreen";

      renderInRouter(<EmailMenu />);

      const foundButton = screen.getByRole("button", {
        name: expectedCopyButton,
      });

      const foundEmailLink = screen.getByRole("link", {
        name: expectedOpenLink,
      });

      expect(foundButton).toBeInTheDocument();
      expect(foundButton).not.toBeVisible();

      expect(foundEmailLink).toBeInTheDocument();
      expect(foundEmailLink).not.toBeVisible();
    });
  });
});
