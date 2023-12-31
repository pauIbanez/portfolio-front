import styled from "styled-components";
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
import ContactFormValues from "../../Types/ContactFormValues";
import { TFunction } from "i18next";

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
  button {
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

interface FormProps {
  t: TFunction<"translation", undefined>;
  currentWidthBreakPoint: number;
  messageSent: boolean;
  messageLoading: boolean;
  onSubmit: (contactFormValues: ContactFormValues) => Promise<void>;
  savedMessage: ContactFormValues | undefined;
  onSendAnother: () => void;
  sentSucess: boolean;
}
const Form = ({
  t,
  currentWidthBreakPoint,
  messageSent,
  messageLoading,
  onSubmit,
  savedMessage,
  onSendAnother,
  sentSucess,
}: FormProps) => (
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
        <ContactItem $size={formTextSizes[currentWidthBreakPoint].contactItem}>
          <ItemIcon
            src="/media/icons/phone.svg"
            alt="phone"
            height={30}
            width={30}
          />
          <ItemName>{t("Contact.contactInfo.itemNames.phone") + ":"}</ItemName>
          <ItemValue>
            <p>+34 673408670</p>
          </ItemValue>
        </ContactItem>
        <ContactItem $size={formTextSizes[currentWidthBreakPoint].contactItem}>
          <EmailMenu />
        </ContactItem>
        <ContactItem $size={formTextSizes[currentWidthBreakPoint].contactItem}>
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
        <MessageSent
          onResetClick={onSendAnother}
          $loading={messageLoading}
          success={sentSucess}
        />
      ) : (
        <ErrorrContextProvider>
          <ContactForm onSubmit={onSubmit} savedMessage={savedMessage} />
        </ErrorrContextProvider>
      )}
    </FormContent>
  </FormHolder>
);

const InfoSection = ({
  t,
  currentWidthBreakPoint,
}: {
  t: TFunction<"translation", undefined>;
  currentWidthBreakPoint: number;
}) => (
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

const ContactPage = () => {
  const onSubmit = async (contactFormValues: ContactFormValues) => {
    setMessageLoading(true);
    setSavedMessage({ ...contactFormValues });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/newMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...contactFormValues,
            language: i18n.language,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    }

    setMessageLoading(false);
    setMessageSent(true);
  };

  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [messageLoading, setMessageLoading] = useState<boolean>(false);
  const [sentSucess, setSuccess] = useState<boolean>(false);

  const [savedMessage, setSavedMessage] = useState<
    ContactFormValues | undefined
  >();

  const { t, i18n } = useTranslation();

  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  const onSendAnother = () => {
    setMessageSent(false);
  };

  return (
    <ContactHolder
      isColumn={currentWidthBreakPoint !== 0}
      data-testid="contact-holder"
    >
      {currentWidthBreakPoint === 0 && (
        <Form
          t={t}
          currentWidthBreakPoint={currentWidthBreakPoint}
          messageLoading={messageLoading}
          messageSent={messageSent}
          sentSucess={sentSucess}
          onSendAnother={onSendAnother}
          onSubmit={onSubmit}
          savedMessage={savedMessage}
        />
      )}
      {currentWidthBreakPoint === 0 ? (
        <ColumnInfoSection>
          <InfoSection t={t} currentWidthBreakPoint={currentWidthBreakPoint} />
        </ColumnInfoSection>
      ) : (
        <RowInfoSection>
          <InfoSection t={t} currentWidthBreakPoint={currentWidthBreakPoint} />
        </RowInfoSection>
      )}

      {currentWidthBreakPoint !== 0 && (
        <Form
          t={t}
          currentWidthBreakPoint={currentWidthBreakPoint}
          messageLoading={messageLoading}
          messageSent={messageSent}
          sentSucess={sentSucess}
          onSendAnother={onSendAnother}
          onSubmit={onSubmit}
          savedMessage={savedMessage}
        />
      )}
    </ContactHolder>
  );
};

export default ContactPage;
