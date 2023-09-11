import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

describe("Given the InputField component", () => {
  describe("When it's intanciated passing the necessary data", () => {
    test("It should render an input with the passed label", () => {
      const label = "Testing Input";
      render(
        <InputField
          id="testing"
          name="testing"
          label={label}
          placeholder="Testing"
          type="text"
          value={""}
          onChange={() => null}
          onBlur={() => null}
          errorMessage=""
          autoCapitalize={true}
          sugestions={"email"}
        />
      );

      const foundInput = screen.getByLabelText(label);

      expect(foundInput).toBeInTheDocument();
    });
  });

  describe("When it's intanciated with an error", () => {
    test("It should put a red border on the input", () => {
      const label = "Testing Input";
      const expectedBorder = "border: 2px solid red;";

      render(
        <InputField
          id="testing"
          name="testing"
          label={label}
          placeholder="Testing"
          type="text"
          value={""}
          onChange={() => null}
          onBlur={() => null}
          errorMessage="some error"
        />
      );

      const foundInput = screen.getByLabelText(label);

      expect(foundInput).toHaveStyle(expectedBorder);
    });
  });

  describe("When it's intanciated as optional", () => {
    test("It should add '(Contact.contactForm.labels.applicable)' to the label", () => {
      const expectedOptional = "(Contact.contactForm.labels.applicable)";

      render(
        <InputField
          id="testing"
          name="testing"
          label={"test input"}
          placeholder="Testing"
          type="text"
          value={""}
          onChange={() => null}
          onBlur={() => null}
          errorMessage=""
          optional={true}
        />
      );

      const foundOptional = screen.getByText(expectedOptional);

      expect(foundOptional).toBeInTheDocument();
    });
  });

  describe("When it's intanciated as big", () => {
    test("It should render with height of 157px", () => {
      const label = "Testing Input";
      const expectedHeight = "height: 157px;";

      render(
        <InputField
          id="testing"
          name="testing"
          label={label}
          placeholder="Testing"
          type="text"
          value={""}
          onChange={() => null}
          onBlur={() => null}
          errorMessage=""
          big={true}
        />
      );

      const foundInput = screen.getByLabelText(label);

      expect(foundInput).toHaveStyle(expectedHeight);
    });
  });
});
