import styled from "styled-components";
import ContactFormValues from "../../Types/ContactFormValues";
import ContactForm from "../../components/ContactForm/ContactForm";
import TiteledText from "../../components/TitledText/TiteledText";
import Colors from "../../data/style/Colors";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 75px 75px 200px 75px;
  gap: 75px;
`;

const FormHolder = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 713px;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  justify-content: center;
  max-width: 570px;
`;

const ContactInfo = styled.section`
  height: 100%;
  width: 370px;
  border-radius: 25px 0 0 25px;
  background-color: ${Colors.main};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;

  padding: 0 40px;
  gap: 40px;

  p {
    margin: 0;
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ContactItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  gap: 5px;
  p {
    font-size: 13px;
  }
  a {
    font-size: 13px;
  }
`;

const ItemIcon = styled.img`
  background-color: white;
  border-radius: 10px;
`;

const AfterItemIcon = styled.img`
  background-color: white;
  border-radius: 10px;
`;

const ItemName = styled.p`
  font-weight: 700;
`;
const ItemValue = styled.div`
  * {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
  }
  a {
    display: flex;
    gap: 3px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const EmailButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  gap: 5px;
  background-color: transparent;
  padding-left: 5px !important;
  font-size: 13px;
  cursor: pointer;

  border: none;
  font-family: inherit;
`;

const EmailButtonHolder = styled.div`
  position: relative;
  width: 100%;
`;

const EmailButtonActive = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  padding-left: 5px;
  height: 35px;
  gap: 5px;
  background-color: white;
  font-size: 13px;
  color: ${Colors.main};
`;

const EmailButtonOptions = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  color: ${Colors.textGray};
  overflow: hidden;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(0, 0, 0, 0.2);
`;

const EmailItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  color: inherit;

  height: 30px;
  padding-left: 40px;

  font-size: 13px;
  background-color: white;
  &:hover {
    color: white;
    background-color: ${Colors.main};
  }
`;

const EmailLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  color: inherit;

  height: 30px;
  padding-left: 40px;

  font-size: 13px;
  background-color: white;
  text-decoration: none;
  &:hover {
    color: white;
    background-color: ${Colors.main};
  }
`;

const ContactPage = () => {
  const onSubmit = (contactFormValues: ContactFormValues) => {};

  const [isEmailActive, setIsEmailActive] = useState<boolean>(false);

  return (
    <ContactHolder>
      <FormHolder>
        <ContactInfo>
          <TiteledText
            title={"Let’s get in touch!"}
            text={
              "Feel free to contact me directly through any of the options bellow:"
            }
            styleObject={{
              gap: 5,
              title: { size: "19px", heading: 0, color: "white" },
              text: { size: "14px", color: "white" },
            }}
          />
          <ContactInfoSection>
            <ContactItem>
              <ItemIcon height={30} width={30} />
              <ItemName>Phone:</ItemName>
              <ItemValue>
                <p>+34 673408670</p>
              </ItemValue>
            </ContactItem>
            <EmailButtonHolder>
              <EmailButton
                onClick={() => {
                  if (!isEmailActive) setIsEmailActive(true);
                }}
                onBlur={() => {
                  setTimeout(() => setIsEmailActive(false), 130);
                }}
              >
                <ItemIcon height={30} width={30} />
                <ItemName>Email:</ItemName>
                <ItemValue>
                  <p>pauibanez2001@gmail.com</p>
                </ItemValue>
                <AfterItemIcon height={15} width={15} />
              </EmailButton>
              <EmailButtonOptions isActive={isEmailActive}>
                <EmailButtonActive>
                  <ItemIcon height={30} width={30} />
                  <ItemName>Email:</ItemName>
                  <ItemValue>
                    <p>pauibanez2001@gmail.com</p>
                  </ItemValue>
                </EmailButtonActive>
                <EmailItem
                  onClick={() => {
                    navigator.clipboard.writeText("pauibanez2001@gmail.com");
                  }}
                >
                  Copy email
                </EmailItem>
                <EmailLink
                  to={"mailto:pauibanez2001@gmail.com"}
                  target="_blank"
                >
                  Open email
                </EmailLink>
              </EmailButtonOptions>
            </EmailButtonHolder>
            <ContactItem>
              <ItemIcon height={30} width={30} />
              <ItemName>LinkedIn:</ItemName>
              <ItemValue>
                <a
                  href="https://www.linkedin.com/in/pau-ibanez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  My LinkedIn profile
                  <AfterItemIcon height={15} width={15} />
                </a>
              </ItemValue>
            </ContactItem>
          </ContactInfoSection>
        </ContactInfo>
        <ContactForm onSubmit={onSubmit} />
      </FormHolder>
      <InfoSection>
        <TiteledText
          title={"Welcome to my Contact page!"}
          text={
            "If you have any questions, inquiries, or would simply like to get in touch, I would be thrilled to hear from you. Whether you're interested in collaborating on a project, discussing a potential opportunity, or just want to say hello, this is the place to reach out. Feel free to fill out the contact form, and I will make sure to get back to you as soon as possible. Additionally, if you prefer to email me directly, you can reach me through the provided email address or phone number. \n \n Thank you for visiting my portfolio website, and I look forward to hearing from you soon!"
          }
        />
        <TiteledText
          title={"Privacy Notice"}
          text={
            "By contacting me via this form or sending an email, you acknowledge and consent that the information you provide, including your name and email address, will be collected and stored for the purpose of responding to your inquiry."
          }
          styleObject={{ text: { size: "14px" } }}
        />
      </InfoSection>
    </ContactHolder>
  );
};

export default ContactPage;
