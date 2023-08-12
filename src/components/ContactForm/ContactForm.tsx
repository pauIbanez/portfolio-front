import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import ContactFormValues, {
  MessageType,
  TypeVariable,
} from "../../Types/ContactFormValues";
import styled from "styled-components";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import SelectField from "../SelectField/SelectField";

const Holder = styled.form`
  margin: 100px;
  height: 713px;
  width: 745px;
  background-color: white;
  border-radius: 0 25px 25px 0;
  padding: 50px;
  position: relative;
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  position: relative;
`;
const ArrowWrapper = styled.div<{ animation: string }>`
  position: absolute;
  left: 50%;
  transform: translateX(-150%);
  z-index: 0;
  opacity: 1;
  bottom: 0;
  height: 40px;
  width: 30px;
  background-color: red;

  user-select: none;
  pointer-events: none;

  ${(props) => "animation: " + props.animation + " 500ms forwards"};

  @keyframes comeIn {
    0% {
      transform: translateX(-150%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  @keyframes goOut {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(-150%);
    }
  }
`;

const VisibleWrapper = styled.div<{ visible: boolean }>`
  width: 100%;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => (props.visible ? "all" : "none")};
  transition: opacity ease-out 500ms;
`;

interface Props {
  onSubmit(contactFormValues: ContactFormValues): void;
}

const ContactForm = ({ onSubmit }: Props) => {
  const [isErrorShowing, setIsErrorShowing] = useState<boolean>(false);

  const [isFilled, setIsFilled] = useState<boolean>(false);

  const [visibleVariableField, setVisibleVariableField] =
    useState<boolean>(false);

  const [arrowTouched, setArrowTouched] = useState<boolean>(false);

  const [rememberedField, setRememberedField] = useState<string>("Placeholder");

  const contactForm = useFormik<ContactFormValues>({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      messageType: MessageType.default,
      subject: "",
      typeVariable: "",
    },
    onSubmit: (values, { validateForm }) => {
      validateForm(values);
      onSubmit(contactForm.values);
    },
    validateOnChange: isErrorShowing,
    validateOnBlur: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("An email is required"),

      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("No message?"),
      messageType: Yup.string().required("Select a message type"),
    }),
  });

  useEffect(() => {
    if (TypeVariable[contactForm.values.messageType].hasVariableField) {
      setVisibleVariableField(true);
      setRememberedField(TypeVariable[contactForm.values.messageType].field);
    } else {
      setVisibleVariableField(false);
    }
  }, [contactForm.values.messageType]);

  useEffect(() => {
    const values = contactForm.values;

    if (
      values.email !== "" &&
      values.firstName !== "" &&
      values.lastName !== "" &&
      values.subject !== "" &&
      values.message !== "" &&
      values.messageType !== MessageType.default
    ) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [contactForm.values]);

  useEffect(() => {
    let foundError = false;

    Object.values(contactForm.errors).forEach((errorValue) => {
      if (!foundError && errorValue !== "") {
        foundError = true;
      }
    });

    setIsErrorShowing(foundError);
  }, [contactForm.errors]);

  useEffect(() => {
    if (contactForm.values.messageType !== MessageType.default) {
      setArrowTouched(true);
    }
  }, [contactForm.values.messageType]);

  return (
    <Holder onSubmit={contactForm.handleSubmit} aria-label="Contact form">
      <ContentHolder>
        <Row>
          <InputField
            id="firstName"
            name="firstName"
            label="First Name"
            placeholder="First name"
            type="text"
            value={contactForm.values.firstName}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            sugestions="given-name"
            errorMessage={
              contactForm.touched.firstName
                ? contactForm.errors.firstName ?? ""
                : ""
            }
          />
          <InputField
            id="lastName"
            name="lastName"
            label="Last Name"
            placeholder="Last name"
            type="text"
            value={contactForm.values.lastName}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            sugestions="family-name"
            errorMessage={
              contactForm.touched.lastName
                ? contactForm.errors.lastName ?? ""
                : ""
            }
          />
        </Row>
        <Row>
          <SelectField
            label="Message Type"
            name="messageType"
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            value={contactForm.values.messageType}
            options={Object.entries(TypeVariable).map((entry) => ({
              name: entry[1].name,
              value: entry[0],
              hasVariableField: entry[1].hasVariableField,
            }))}
          />
          <ArrowWrapper
            animation={
              arrowTouched ? (visibleVariableField ? "comeIn" : "goOut") : ""
            }
          />
          <VisibleWrapper
            visible={visibleVariableField}
            data-testid="visible-wrapper"
          >
            <InputField
              id="typeVariable"
              name="typeVariable"
              label={rememberedField}
              placeholder={rememberedField}
              type="text"
              optional={true}
              value={contactForm.values.typeVariable as string}
              onChange={contactForm.handleChange}
              onBlur={contactForm.handleBlur}
              errorMessage={
                contactForm.touched.typeVariable
                  ? contactForm.errors.typeVariable ?? ""
                  : ""
              }
            />
          </VisibleWrapper>
        </Row>
        <InputField
          id="email"
          name="email"
          label="Email"
          placeholder="Email Adress"
          type="email"
          value={contactForm.values.email}
          onChange={contactForm.handleChange}
          onBlur={contactForm.handleBlur}
          errorMessage={
            contactForm.touched.email ? contactForm.errors.email ?? "" : ""
          }
        />
        <InputField
          id="subject"
          name="subject"
          label="Subject"
          placeholder="Subject"
          type="text"
          value={contactForm.values.subject}
          onChange={contactForm.handleChange}
          onBlur={contactForm.handleBlur}
          errorMessage={
            contactForm.touched.subject ? contactForm.errors.subject ?? "" : ""
          }
        />
        <InputField
          id="message"
          name="message"
          label="Message"
          placeholder="Message..."
          type="text"
          big={true}
          value={contactForm.values.message}
          onChange={contactForm.handleChange}
          onBlur={contactForm.handleBlur}
          errorMessage={
            contactForm.touched.message ? contactForm.errors.message ?? "" : ""
          }
        />
        <Row>
          <Button
            submit={true}
            disabled={!isFilled || isErrorShowing}
            styleObject={{
              width: 160,
              fontSize: 15,
              height: 40,
              radius: 10,
              padding: 0,
            }}
          >
            Send Message
          </Button>
        </Row>
      </ContentHolder>
    </Holder>
  );
};

export default ContactForm;
