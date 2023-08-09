import { ChangeEvent, FocusEvent } from "react";

interface Props {
  options: { name: string; value: string }[];
  label: string;
  name: string;
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: FocusEvent) => void;
  value: string;
}

const SelectField = ({
  label,
  name,
  onBlur,
  onChange,
  options,
  value,
}: Props) => {
  const renderOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.name}
    </option>
  ));
  return (
    <select
      name="messageType"
      id="messageType"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      {renderOptions}
    </select>
  );
};

export default SelectField;
