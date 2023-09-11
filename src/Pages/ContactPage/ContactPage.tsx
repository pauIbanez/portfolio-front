import styled from "styled-components";
import ContactFormValues from "../../Types/ContactFormValues";
import ContactForm from "../../components/formComponents/ContactForm/ContactForm";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import Colors from "../../data/style/Colors";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ErrorrContextProvider } from "react-errorr";

const ContactHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px;
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

const CopyEmailButton = styled.button`
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

  const { t } = useTranslation();

  return (
    <ContactHolder>
      <FormHolder>
        <ContactInfo>
          <TiteledText
            title={t("Contact.contactInfo.title")}
            text={t("Contact.contactInfo.text")}
            styleObject={{
              gap: 5,
              title: { size: "19px", heading: 0, color: "white" },
              text: { size: "14px", color: "white" },
            }}
          />
          <ContactInfoSection>
            <ContactItem>
              <ItemIcon height={30} width={30} />
              <ItemName>
                {t("Contact.contactInfo.itemNames.phone") + ":"}
              </ItemName>
              <ItemValue>
                <p>+34 673408670</p>
              </ItemValue>
            </ContactItem>
            <EmailButtonHolder>
              <EmailButton
                onClick={() => {
                  setIsEmailActive(true);
                }}
                onBlur={() => {
                  setTimeout(() => setIsEmailActive(false), 130);
                }}
              >
                <ItemIcon height={30} width={30} />
                <ItemName>
                  {t("Contact.contactInfo.itemNames.email") + ":"}
                </ItemName>
                <ItemValue>
                  <p>pauibanez2001@gmail.com</p>
                </ItemValue>
                <AfterItemIcon height={15} width={15} />
              </EmailButton>
              <EmailButtonOptions isActive={isEmailActive}>
                <EmailButtonActive>
                  <ItemIcon height={30} width={30} />
                  <ItemName>
                    {t("Contact.contactInfo.itemNames.email") + ":"}
                  </ItemName>
                  <ItemValue>
                    <p>pauibanez2001@gmail.com</p>
                  </ItemValue>
                </EmailButtonActive>
                <CopyEmailButton
                  onClick={() => {
                    navigator.clipboard.writeText("pauibanez2001@gmail.com");
                  }}
                >
                  {t("Contact.contactInfo.itemValues.copyEmail")}
                </CopyEmailButton>
                <EmailLink
                  to={"mailto:pauibanez2001@gmail.com"}
                  target="_blank"
                >
                  {t("Contact.contactInfo.itemValues.openEmail")}
                </EmailLink>
              </EmailButtonOptions>
            </EmailButtonHolder>
            <ContactItem>
              <ItemIcon height={30} width={30} />
              <ItemName>
                {t("Contact.contactInfo.itemNames.linkedIn") + ":"}
              </ItemName>
              <ItemValue>
                <a
                  href="https://www.linkedin.com/in/pau-ibanez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("Contact.contactInfo.itemValues.linkedIn")}
                  <AfterItemIcon height={15} width={15} />
                </a>
              </ItemValue>
            </ContactItem>
          </ContactInfoSection>
        </ContactInfo>
        <ErrorrContextProvider>
          <ContactForm onSubmit={onSubmit} />
        </ErrorrContextProvider>
      </FormHolder>
      <InfoSection>
        <TiteledText
          title={t("Contact.textSections.0.title")}
          text={t("Contact.textSections.0.text")}
        />
        <TiteledText
          title={t("Contact.textSections.1.title")}
          text={t("Contact.textSections.1.text")}
          styleObject={{ gap: 0, text: { size: "13px" } }}
        />
      </InfoSection>
    </ContactHolder>
  );
};

export default ContactPage;
