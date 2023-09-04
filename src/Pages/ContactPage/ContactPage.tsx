import styled from "styled-components";
import ContactFormValues from "../../Types/ContactFormValues";
import ContactForm from "../../components/ContactForm/ContactForm";
import TiteledText from "../../components/TitledText/TiteledText";

const ContactHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 75px 75px 200px 75px;
`;

const FormHolder = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  justify-content: center;
`;

const ContactPage = () => {
  const onSubmit = (contactFormValues: ContactFormValues) => {};

  return (
    <ContactHolder>
      <FormHolder>
        <ContactForm onSubmit={onSubmit} />
      </FormHolder>
      <InfoSection>
        <TiteledText title={"Welcome to my Contact page!"} text={""} />
        <TiteledText title={"Privacy Notice"} text={""} />
      </InfoSection>
    </ContactHolder>
  );
};

export default ContactPage;
