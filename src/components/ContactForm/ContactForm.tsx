import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import ContactFormValues, { MessageType } from "../../Types/ContactFormValues";

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
};

export default ContactForm;
