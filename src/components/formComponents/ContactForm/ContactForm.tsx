import { useFormik } from "formik";
import { useEffect, useState, useContext, useRef } from "react";
import * as Yup from "yup";
import ContactFormValues, {
  MessageType,
  TypeVariable,
} from "../../../Types/ContactFormValues";
import styled from "styled-components";
import InputField from "../InputField/InputField";
import Button from "../../Button/Button";
import SelectField from "../SelectField/SelectField";
import { useTranslation } from "react-i18next";
import { Errorr, ErrorrContext } from "react-errorr";

const Holder = styled.form`
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

  const { t } = useTranslation();

  const [rememberedField, setRememberedField] = useState<string>("Placeholder");

  const { activateErrorr, forceRemoveErrorr } = useContext(ErrorrContext);

  const activeErrors = useRef<{ [key: string]: boolean }>({
    email: false,
    firstName: false,
    lastName: false,
    message: false,
    subject: false,
    typeVariable: false,
  });

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
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("Contact.contactForm.errors.email.1"))
        .required(t("Contact.contactForm.errors.email.0")),

      firstName: Yup.string().required(
        t("Contact.contactForm.errors.firstName")
      ),
      lastName: Yup.string().required(t("Contact.contactForm.errors.lastName")),
      subject: Yup.string().required(t("Contact.contactForm.errors.subject")),
      message: Yup.string().required(t("Contact.contactForm.errors.message")),
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

    Object.entries(contactForm.touched).forEach(([fieldKey, fieldTouched]) => {
      if (contactForm.errors[fieldKey as keyof ContactFormValues]) {
        if (!foundError) {
          foundError = true;
        }
        if (!activeErrors.current[fieldKey]) {
          activateErrorr(fieldKey);
          activeErrors.current[fieldKey] = true;
        }
      } else if (activeErrors.current[fieldKey]) {
        activeErrors.current[fieldKey] = false;
        forceRemoveErrorr(fieldKey);
      }
    });

    setIsErrorShowing(foundError);
  }, [
    forceRemoveErrorr,
    activateErrorr,
    contactForm.errors,
    contactForm.touched,
  ]);

  useEffect(() => {
    if (contactForm.values.messageType !== MessageType.default) {
      setArrowTouched(true);
    }
  }, [contactForm.values.messageType]);

  return (
    <Holder onSubmit={contactForm.handleSubmit} aria-label="Contact form">
      <ContentHolder>
        <Row>
          <Errorr name="firstName" message={contactForm.errors.firstName}>
            <InputField
              id="firstName"
              name="firstName"
              label={t("Contact.contactForm.labels.firstName")}
              placeholder={t("Contact.contactForm.labels.firstName")}
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
          </Errorr>
          <Errorr name="lastName" message={contactForm.errors.lastName}>
            <InputField
              id="lastName"
              name="lastName"
              label={t("Contact.contactForm.labels.lastName")}
              placeholder={t("Contact.contactForm.labels.lastName")}
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
          </Errorr>
        </Row>
        <Row>
          <SelectField
            label={t("Contact.contactForm.labels.messageType")}
            name="messageType"
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            value={contactForm.values.messageType}
            options={Object.entries(TypeVariable).map((entry) => ({
              name: t(entry[1].name),
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
              label={t(rememberedField)}
              placeholder={t(rememberedField)}
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
        <Errorr name="email" message={contactForm.errors.email}>
          <InputField
            id="email"
            name="email"
            label={t("Contact.contactForm.labels.email")}
            placeholder={t("Contact.contactForm.labels.email")}
            type="email"
            value={contactForm.values.email}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            errorMessage={
              contactForm.touched.email ? contactForm.errors.email ?? "" : ""
            }
          />
        </Errorr>
        <Errorr name="subject" message={contactForm.errors.subject}>
          <InputField
            id="subject"
            name="subject"
            label={t("Contact.contactForm.labels.subject")}
            placeholder={t("Contact.contactForm.labels.subject")}
            type="text"
            value={contactForm.values.subject}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            errorMessage={
              contactForm.touched.subject
                ? contactForm.errors.subject ?? ""
                : ""
            }
          />
        </Errorr>
        <Errorr name="message" message={contactForm.errors.message}>
          <InputField
            id="message"
            name="message"
            label={t("Contact.contactForm.labels.message")}
            placeholder={t("Contact.contactForm.labels.message") + "..."}
            type="text"
            big={true}
            value={contactForm.values.message}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            errorMessage={
              contactForm.touched.message
                ? contactForm.errors.message ?? ""
                : ""
            }
          />
        </Errorr>
        <Row>
          <Button
            submit={true}
            disabled={!isFilled || isErrorShowing}
            styleObject={{
              width: 170,
              fontSize: 14,
              height: 40,
              radius: 10,
              padding: 0,
            }}
          >
            {t("Contact.contactForm.sendMessage")}
          </Button>
        </Row>
      </ContentHolder>
    </Holder>
  );
};

export default ContactForm;
