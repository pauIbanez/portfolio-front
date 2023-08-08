import styled from "styled-components";
import { ChangeEvent, FocusEvent } from "react";
import Colors from "../../data/style/Colors";

interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  type: string;
  icon: string;
  errorMessage: string;
  sugestions?: string;
  autoCapitalize?: boolean;
  max?: number;
  onChange(e: ChangeEvent<any>): void;
  onBlur(e: FocusEvent<any, Element>): void;
}

interface CustomInputFieldProps {
  hasValidationError: boolean;
}

const InputHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const CustomInputField = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 50px;
  padding-right: 20px;

  border: ${(props: CustomInputFieldProps) =>
    props.hasValidationError ? "1px solid red" : "none"};
  outline: none;
  height: 50px;
  border-radius: 15px;
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

const InputIconHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputError = styled.p`
  color: red;

  height: 20px;
`;

const InputField = ({
  id,
  label,
  value,
  name,
  placeholder,
  type,
  icon,
  errorMessage,
  max,
  sugestions,
  autoCapitalize,
  onChange,
  onBlur,
}: Props) => {
  return (
    <InputHolder>
      <label htmlFor={id} hidden>
        {label}
      </label>
      <InputIconHolder>
        <img src={icon} alt={`${id} input field icon`} height={30} width={30} />
      </InputIconHolder>
      <CustomInputField
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        hasValidationError={errorMessage ? true : false}
        maxLength={max}
        autoComplete={sugestions ? sugestions : "off"}
        autoCapitalize={autoCapitalize ? "characters" : "off"}
      />
      <InputError>{errorMessage}</InputError>
    </InputHolder>
  );
};

export default InputField;
