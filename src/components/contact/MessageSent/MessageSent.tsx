import styled, { keyframes } from "styled-components";
import TiteledText from "../../textComponents/TitledText/TiteledText";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Holder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
`;

const Icon = styled.img``;

const fadeIn = keyframes`
0{
  opacity: 0;
}
100%{
  opacity: 1;
}`;

const Content = styled.div<{ $loading: boolean }>`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$loading ? 5 : 30)}px;
  opacity: 0;

  animation: ${fadeIn} ease-in 0.3s forwards;

  a {
    text-decoration: none;
    font-size: 14px;
  }
`;

interface Props {
  onResetClick: () => void;
  $loading: boolean;
  success: boolean;
}

const MessageSent = ({ onResetClick, $loading, success: sucess }: Props) => {
  const { t } = useTranslation();
  return (
    <Holder>
      <Icon
        alt="message"
        src="/media/icons/message.png"
        height={200}
        width={265}
      />
      <Content $loading={$loading}>
        <TiteledText
          title={
            $loading
              ? t("Contact.messageSent.title.loading")
              : sucess
              ? t("Contact.messageSent.title.success")
              : t("Contact.messageSent.title.fail")
          }
          text={
            $loading
              ? t("Contact.messageSent.text.loading")
              : sucess
              ? t("Contact.messageSent.text.success")
              : t("Contact.messageSent.text.fail")
          }
          styleObject={{
            gap: 10,
          }}
        />
        {$loading && (
          <Link
            to={"https://render.com/docs/free#spinning-down-on-idle"}
            target="_blank"
          >
            {t("Contact.messageSent.link")}
          </Link>
        )}

        {!$loading && (
          <Button
            onClick={onResetClick}
            styleObject={{
              fontSize: 14,
              padding: 15,
              height: 40,
              radius: 10,
            }}
          >
            {sucess
              ? t("Contact.messageSent.button.success")
              : t("Contact.messageSent.button.fail")}
          </Button>
        )}
      </Content>
    </Holder>
  );
};

export default MessageSent;
