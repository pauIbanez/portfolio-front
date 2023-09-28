import styled, { keyframes } from "styled-components";
import TiteledText from "../../textComponents/TitledText/TiteledText";
import Button from "../../Button/Button";

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

const Content = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  opacity: 0;

  animation: ${fadeIn} ease-in 0.3s forwards;
`;

interface Props {
  onResetClick: () => void;
  loading: boolean;
  success: boolean;
}

const MessageSent = ({ onResetClick, loading, success: sucess }: Props) => {
  return (
    <Holder>
      <Icon
        alt="message"
        src="/media/icons/message.png"
        height={200}
        width={265}
      />
      <Content>
        <TiteledText
          title={
            loading
              ? "<&>Sending<&> message"
              : sucess
              ? "Mesage <&>Sent<&>"
              : "Something went <&>wrong<&>"
          }
          text={
            loading
              ? "Your message is being sent, this should not take long..."
              : sucess
              ? "Thank you for geting in contact with me. I've receivced your message and I'll be in contact ASAP!"
              : "I'm sorry! It appears your message was not sucessfuly sent, please check the data or try again later. If this issue persists please feel free to contact me directly with the provided info."
          }
          styleObject={{
            gap: 10,
          }}
        />
        {!loading && (
          <Button
            onClick={onResetClick}
            styleObject={{
              fontSize: 14,
              padding: 15,
              height: 40,
              radius: 10,
            }}
          >
            {sucess ? "Writte another!" : "Try again"}
          </Button>
        )}
      </Content>
    </Holder>
  );
};

export default MessageSent;
