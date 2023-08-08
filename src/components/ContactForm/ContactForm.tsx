import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import ContactFormValues, {
  MessageType,
  TypeVariable,
} from "../../Types/ContactFormValues";
import styled from "styled-components";
import InputField from "../InputField/InputField";
import Colors from "../../data/style/Colors";

const Holder = styled.form`
  margin: 100px;
  height: 713px;
  width: 745px;
  background-color: white;
  border-radius: 0 25px 25px 0;
  padding: 50px;
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

interface Props {
  onSubmit(contactFormValues: ContactFormValues): void;
}

const ContactForm = ({ onSubmit }: Props) => {
  const [isErrorShowing, setIsErrorShowing] = useState<boolean>(false);
  const [visibleVariableField, setVisibleVariableField] =
    useState<boolean>(false);

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
    let foundError = false;

    Object.values(contactForm.errors).forEach((errorValue) => {
      if (!foundError && errorValue !== "") {
        foundError = true;
      }
    });

    setIsErrorShowing(foundError);
  }, [contactForm.errors]);

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
          MESSAGE TYPE
          <InputField
            id="typeVariable"
            name="typeVariable"
            label={TypeVariable["C"].field}
            placeholder={TypeVariable["C"].field}
            type="text"
            value={contactForm.values.typeVariable ?? ""}
            onChange={contactForm.handleChange}
            onBlur={contactForm.handleBlur}
            errorMessage={
              contactForm.touched.typeVariable
                ? contactForm.errors.typeVariable ?? ""
                : ""
            }
          />
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
      </ContentHolder>
    </Holder>
  );
};

export default ContactForm;
