import styled from "styled-components";
import ContactFormValues, {
  MessageSender,
} from "../../Types/ContactFormValues";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import Colors from "../../data/style/Colors";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ErrorrContextProvider } from "react-errorr";
import {
  formSize,
  formTextSizes,
  textSizes,
} from "../../data/Pages/responsive/contactPage";
import ResponsiveContext from "../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import EmailMenu from "../../components/contact/EmailMenu/EmailMenu";
import MessageSent from "../../components/contact/MessageSent/MessageSent";

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

const FormContent = styled.div<{ $width: number }>`
  height: 100%;
  width: ${(props) => props.$width}px;
  background-color: white;
  border-radius: 0 25px 25px 0;
`;

const ContactPage = () => {
  const onSubmit = (contactFormValues: ContactFormValues) => {
    setMessageLoading(true);

    setTimeout(() => {
      setMessageSent(true);
      setSavedMessage({ ...contactFormValues });
      setMessageLoading(false);
    }, 2000);
  };

  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [messageLoading, setMessageLoading] = useState<boolean>(false);

  const [savedMessage, setSavedMessage] = useState<
    ContactFormValues | undefined
  >();

  const { t } = useTranslation();

  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  const onSendAnother = () => {
    setMessageSent(false);
  };

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
      <FormContent $width={formSize[currentWidthBreakPoint].width}>
        {messageSent || messageLoading ? (
          <MessageSent onResetClick={onSendAnother} loading={messageLoading} />
        ) : (
          <ErrorrContextProvider>
            <ContactForm onSubmit={onSubmit} savedMessage={savedMessage} />
          </ErrorrContextProvider>
        )}
      </FormContent>
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
