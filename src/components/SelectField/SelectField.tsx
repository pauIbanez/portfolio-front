import { ChangeEvent, FocusEvent, useRef, useState } from "react";
import styled from "styled-components";
import Colors from "../../data/style/Colors";

const InputHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  z-index: 5;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 700;
  color: ${Colors.textGray};
`;

const Select = styled.select<{ isActive: boolean }>`
  *::before,
  *::after {
    box-sizing: border-box;
  }

  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  border: none;
  outline: none;
  height: 40px;
  border-radius: ${(props) => (props.isActive ? "10px 10px 0 0" : "10px")};
  font-family: inherit;
  font-size: 15px;

  color: white;

  background-color: ${Colors.disabledMain};

  &::placeholder {
    color: white;
    font-size: 15px;
    font-weight: 400;
  }
`;

const Option = styled.option`
  background-color: white;
  color: ${Colors.textGray};
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

interface Props {
  options: { name: string; value: string; hasVariableField: boolean }[];
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
    <Option key={option.value} value={option.value}>
      {option.name}
      {option.hasVariableField ? " *" : ""}
    </Option>
  ));
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <InputHolder>
      <Label htmlFor={name}>{label}</Label>
      <Select
        ref={selectRef}
        name="messageType"
        id="messageType"
        value={value}
        onChange={(e: ChangeEvent) => {
          onChange(e);
          setIsActive(false);
          selectRef.current?.blur();
        }}
        onBlur={(e: FocusEvent) => {
          onBlur(e);
          console.log("Blured!");
          setIsActive(false);
        }}
        onFocus={() => {
          setIsActive(true);
        }}
        isActive={isActive}
      >
        {renderOptions}
      </Select>
    </InputHolder>
  );
};

export default SelectField;
