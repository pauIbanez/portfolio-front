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
  height: 160px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  opacity: 0;

  animation: ${fadeIn} ease-in 0.3s forwards;
`;

interface Props {
  onResetClick: () => void;
  loading: boolean;
}

const MessageSent = ({ onResetClick, loading }: Props) => {
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
          title={loading ? "<&>Sending<&> message" : "Mesage <&>Sent<&>"}
          text={
            loading
              ? "Your message is being sent, this should not take long..."
              : "Thank you for geting in contact with me. I've receivced your message and I'll be in contact ASAP!"
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
              radius: 13,
            }}
          >
            Writte another!
          </Button>
        )}
      </Content>
    </Holder>
  );
};

export default MessageSent;
