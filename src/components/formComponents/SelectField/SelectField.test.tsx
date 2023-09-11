import { fireEvent, render, screen } from "@testing-library/react";
import SelectField from "./SelectField";

describe("Given the SelectField component", () => {
  describe("When it's intanciated", () => {
    test("Then it should render a label with the passed label", () => {
      const label = "test-label";
      const name = "name";
      const onBlur = () => null;
      const onChange = () => null;
      const options = [
        { name: "option1", value: "value1", hasVariableField: false },
      ];
      const value = "value1";

      render(
        <SelectField
          label={label}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          options={options}
          value={value}
        />
      );
      const foundLabel = screen.getByLabelText(label);

      expect(foundLabel).toBeInTheDocument();
    });
  });

  describe("When it's intanciated with multiple options", () => {
    test("Then it should render the options with an * on variable Field ones", () => {
      const label = "test-label";
      const name = "name";
      const onBlur = () => null;
      const onChange = () => null;
      const options = [
        { name: "option1", value: "value1", hasVariableField: false },
        { name: "option2", value: "value2", hasVariableField: true },
      ];
      const value = "value1";

      render(
        <SelectField
          label={label}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          options={options}
          value={value}
        />
      );

      const foundOption1 = screen.getByRole("option", {
        name: options[0].name,
      });

      const foundOption2 = screen.getByRole("option", {
        name: `${options[1].name} *`,
      });

      expect(foundOption1).toBeInTheDocument();
      expect(foundOption2).toBeInTheDocument();
    });
  });

  describe("When it's intanciated and the change event is fired", () => {
    test("Then it should call onChange", () => {
      const label = "test-label";
      const name = "name";
      const onBlur = () => null;
      const onChange = jest.fn();
      const options = [
        { name: "option1", value: "value1", hasVariableField: false },
        { name: "option2", value: "value2", hasVariableField: true },
      ];
      const value = "value1";

      render(
        <SelectField
          label={label}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          options={options}
          value={value}
        />
      );
      const foundLabel = screen.getByLabelText(label);
      fireEvent.change(foundLabel, { target: { value: options[1].value } });

      expect(onChange).toHaveBeenCalled();
    });
  });

  describe("When it's intanciated and the blur event is fired", () => {
    test("Then it should call onBlur", () => {
      const label = "test-label";
      const name = "name";
      const onBlur = jest.fn();
      const onChange = () => null;
      const options = [
        { name: "option1", value: "value1", hasVariableField: false },
        { name: "option2", value: "value2", hasVariableField: true },
      ];
      const value = "value1";

      render(
        <SelectField
          label={label}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          options={options}
          value={value}
        />
      );
      const foundLabel = screen.getByLabelText(label);
      fireEvent.blur(foundLabel);

      expect(onBlur).toHaveBeenCalled();
    });
  });
  describe("When it's intanciated and the focus event is fired", () => {
    test("Then it should render the correct border radius", () => {
      const expectedBorderRadius = "border-radius: 10px 10px 0 0;";
      const label = "test-label";
      const name = "name";
      const onBlur = jest.fn();
      const onChange = () => null;
      const options = [
        { name: "option1", value: "value1", hasVariableField: false },
        { name: "option2", value: "value2", hasVariableField: true },
      ];
      const value = "value1";

      render(
        <SelectField
          label={label}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          options={options}
          value={value}
        />
      );
      const foundLabel = screen.getByLabelText(label);
      fireEvent.focus(foundLabel);

      expect(foundLabel).toHaveStyle(expectedBorderRadius);
    });
  });
});
