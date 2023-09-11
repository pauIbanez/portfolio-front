import styled from "styled-components";
import { ChangeEvent, FocusEvent } from "react";
import Colors from "../../../data/style/Colors";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  type: string;
  big?: boolean;
  optional?: boolean;
  errorMessage: string;
  sugestions?: string;
  autoCapitalize?: boolean;
  onChange(e: ChangeEvent<any>): void;
  onBlur(e: FocusEvent<any, Element>): void;
}

interface CustomInputFieldProps {
  hasValidationError: boolean;
  big?: boolean;
}

const InputHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const CustomInputField = styled.input<CustomInputFieldProps>`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  border: ${(props) => (props.hasValidationError ? "2px solid red" : "none")};
  outline: none;
  height: ${(props) => (props.big ? "157px" : "40px")};
  ${(props) => (props.big ? "padding-top: 5px; resize: vertical;" : "")}
  border-radius: 10px;
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

const Label = styled.label<{ error?: string }>`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.error ? "red" : Colors.textGray)};
`;

const Optional = styled.span`
  font-weight: 500;
  font-size: 12px;
`;

const InputField = ({
  id,
  label,
  value,
  name,
  placeholder,
  type,
  big,
  optional,
  errorMessage,
  sugestions,
  autoCapitalize,
  onChange,
  onBlur,
}: Props) => {
  const { t } = useTranslation();

  return (
    <InputHolder>
      <Label htmlFor={id} error={errorMessage}>
        {label}
        {optional && (
          <Optional>{` (${t(
            "Contact.contactForm.labels.applicable"
          )})`}</Optional>
        )}
      </Label>

      <CustomInputField
        id={id}
        as={big ? "textarea" : "input"}
        placeholder={placeholder}
        type={type}
        name={name}
        big={big}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        hasValidationError={errorMessage ? true : false}
        autoComplete={sugestions ? sugestions : "off"}
        autoCapitalize={autoCapitalize ? "characters" : "off"}
      />
    </InputHolder>
  );
};

export default InputField;
