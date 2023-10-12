import { screen } from "@testing-library/react";
import MessageSent from "./MessageSent";
import { renderInRouter } from "../../../setupTests";

describe("Given the MessageSent component", () => {
  describe("When it's instanciated as loading", () => {
    test("Then it should render the title a heading 3 with name 'Sending message", () => {
      const expectedTitle = "Contact.messageSent.title.loading";

      renderInRouter(
        <MessageSent
          $loading={true}
          onResetClick={() => null}
          success={false}
        />
      );

      const foundTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitle,
      });

      expect(foundTitle).toBeInTheDocument();
    });
  });

  describe("When it's instanciated as sucess", () => {
    test("Then it should render the title a heading 3 with name 'Mesage Sent'", () => {
      const expectedTitle = "Contact.messageSent.title.success";

      renderInRouter(
        <MessageSent
          $loading={false}
          onResetClick={() => null}
          success={true}
        />
      );

      const foundTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitle,
      });

      expect(foundTitle).toBeInTheDocument();
    });
  });

  describe("When it's instanciated as fail", () => {
    test("Then it should render the title a heading 3 with name 'Something went wrong'", () => {
      const expectedTitle = "Contact.messageSent.title.fail";

      renderInRouter(
        <MessageSent
          $loading={false}
          onResetClick={() => null}
          success={false}
        />
      );

      const foundTitle = screen.getByRole("heading", {
        level: 3,
        name: expectedTitle,
      });

      expect(foundTitle).toBeInTheDocument();
    });
  });
});
