import styled from "styled-components";
import ContactFormValues from "../../Types/ContactFormValues";
import ContactForm from "../../components/formComponents/ContactForm/ContactForm";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import Colors from "../../data/style/Colors";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ErrorrContextProvider } from "react-errorr";
import {
  formSize,
  formTextSizes,
  textSizes,
} from "../../data/Pages/responsive/contactPage";
import ResponsiveContext from "../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import EmailMenu from "../../components/contact/EmailMenu/EmailMenu";

const ContactHolder = styled.div<{ isColumn: boolean }>`
  display: flex;
  ${(props) => (props.isColumn ? "flex-direction: column;" : "")}
  justify-content: center;
  align-items: center;
  padding: 75px;
  gap: 75px;
`;

const FormHolder = styled.main<{ $height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.$height}px;
`;

const ColumnInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contnet: center;
  width: 570px;
  gap: 50px;
`;

const RowInfoSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
`;

const ContactInfo = styled.section<{ $width: number }>`
  height: 100%;
  width: ${(props) => props.$width}px;
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
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const ContactItem = styled.div<{ $size: number }>`
  display: flex;
  align-items: center;
  padding-left: 5px;
  gap: 5px;
  p {
    font-size: ${(props) => props.$size}px;
  }
  a {
    font-size: ${(props) => props.$size}px;
  }
`;

const ItemIcon = styled.img``;

const AfterItemIcon = styled.img``;

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

const EmailButtonActive = styled.div<{ size: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  padding-left: 5px;
  height: 35px;
  gap: 5px;
  background-color: white;
  font-size: ${(props) => props.size}px;
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

    img {
      content: url(/media/icons/link.svg);
    }
  }
`;

const ContactPage = () => {
  const onSubmit = (contactFormValues: ContactFormValues) => {};

  const { t } = useTranslation();

  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  const Form = () => (
    <FormHolder $height={formSize[currentWidthBreakPoint].height}>
      <ContactInfo $width={formSize[currentWidthBreakPoint].infoWidth}>
        <TiteledText
          title={t("Contact.contactInfo.title")}
          text={t("Contact.contactInfo.text")}
          styleObject={{
            gap: 5,
            title: { size: 19, heading: 0, color: "white" },
            text: { size: 14, color: "white" },
          }}
        />
        <ContactInfoSection>
          <ContactItem
            $size={formTextSizes[currentWidthBreakPoint].contactItem}
          >
            <ItemIcon
              src="/media/icons/phone.svg"
              alt="phone"
              height={30}
              width={30}
            />
            <ItemName>
              {t("Contact.contactInfo.itemNames.phone") + ":"}
            </ItemName>
            <ItemValue>
              <p>+34 673408670</p>
            </ItemValue>
          </ContactItem>
          <ContactItem
            $size={formTextSizes[currentWidthBreakPoint].contactItem}
          >
            <EmailMenu />
          </ContactItem>
          <ContactItem
            $size={formTextSizes[currentWidthBreakPoint].contactItem}
          >
            <ItemIcon
              height={30}
              width={30}
              src="/media/icons/linkedIn.svg"
              alt="linkedIn"
            />
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
                <AfterItemIcon
                  height={15}
                  width={15}
                  src="/media/icons/link.svg"
                  alt="newscreen"
                />
              </a>
            </ItemValue>
          </ContactItem>
        </ContactInfoSection>
      </ContactInfo>
      <ErrorrContextProvider>
        <ContactForm onSubmit={onSubmit} />
      </ErrorrContextProvider>
    </FormHolder>
  );

  const InfoSection = () => (
    <>
      <TiteledText
        title={t("Contact.textSections.0.title")}
        text={t("Contact.textSections.0.text")}
        styleObject={{
          title: {
            size: textSizes[currentWidthBreakPoint].title,
          },
          text: {
            size: textSizes[currentWidthBreakPoint].text,
          },
        }}
      />
      <TiteledText
        title={t("Contact.textSections.1.title")}
        text={t("Contact.textSections.1.text")}
        styleObject={{
          gap: 0,
          title: {
            size: textSizes[currentWidthBreakPoint].title,
          },
          text: {
            size: textSizes[currentWidthBreakPoint].text - 2,
          },
        }}
      />
    </>
  );
  return (
    <ContactHolder isColumn={currentWidthBreakPoint !== 0}>
      {currentWidthBreakPoint === 0 && <Form />}
      {currentWidthBreakPoint === 0 ? (
        <ColumnInfoSection>
          <InfoSection />
        </ColumnInfoSection>
      ) : (
        <RowInfoSection>
          <InfoSection />
        </RowInfoSection>
      )}

      {currentWidthBreakPoint !== 0 && <Form />}
    </ContactHolder>
  );
};

export default ContactPage;
