import styled from "styled-components";
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

const Content = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

interface Props {
  onResetClick: () => void;
}

const MessageSent = ({ onResetClick }: Props) => {
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
          title="Mesage <&>Sent<&>"
          text="Thank you for geting in contact with me. I've receivced your message and I'll be in contact ASAP!"
          styleObject={{
            gap: 10,
          }}
        />
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
      </Content>
    </Holder>
  );
};

export default MessageSent;
