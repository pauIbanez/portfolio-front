import styled from "styled-components";
import sections from "../../../../data/cv/sections";
import CVSection from "../../CVSection/CVSection";
import Button from "../../../Button/Button";
import ColoredText from "../../../ColoredText/ColoredText";
import Colors from "../../../../data/style/Colors";
import { useState, useCallback, useRef } from "react";
import useError from "../../../../hooks/useError";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const DownloadHolder = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 50px;
  gap: 10%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  min-width: 40%;
`;

const DownloadItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

const DisclaimerHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    font-size: 10px;
    white-space: pre-line;
  }
`;

const BlueLabel = styled.label<{ isChecked: boolean; hasError: boolean }>`
  font-size: 12px;
  cursor: pointer;
  user-select: none;

  display: flex;
  gap: 5px;
  align-items: center;

  div {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;

    height: 20px;
    width: 20px;

    border: ${(props) => (props.hasError ? "solid 3px red" : "none")};
    border-radius: 5px;

    background-color: ${(props) =>
      props.isChecked ? Colors.main : Colors.disabledMain};
  }
`;

const CheckMark = styled.input<{ error: boolean }>`
  display: none;
`;

const DownloadSection = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const { loadError } = useError();

  loadError({
    name: "test",
    content: "hello world",
    ref: errorRef,
  });

  const onClick = useCallback(
    (link: string) => {
      if (isChecked) {
        console.log("download: " + link);
      }
    },
    [isChecked]
  );

  const toggleCheck = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <CVSection title={sections.download.title}>
      <Content>
        <p>{sections.download.text}</p>
        <DownloadHolder>
          {sections.download.items.map((column, index) => (
            <Column key={index}>
              {column.map((item) => (
                <DownloadItem key={item.name}>
                  <ColoredText
                    text={`${item.name}<&> - 13MB`}
                    styleData={{
                      accentColor: Colors.lightTextGray,
                      color: Colors.textGray,
                      size: "15px",
                    }}
                  />
                  <Button
                    onClick={() => onClick(item.link)}
                    style={{ height: 40, width: 156, radius: 10, fontSize: 15 }}
                  >
                    Download
                  </Button>
                </DownloadItem>
              ))}
            </Column>
          ))}
        </DownloadHolder>
        <DisclaimerHolder>
          <p>{sections.download.disclaimer}</p>
          <BlueLabel htmlFor="tos" isChecked={isChecked} hasError={false}>
            <div ref={errorRef}></div>
            <CheckMark
              type="checkbox"
              name="tos"
              id="tos"
              error={false}
              onChange={toggleCheck}
            />
            {sections.download.checkmark}
          </BlueLabel>
        </DisclaimerHolder>
      </Content>
    </CVSection>
  );
};

export default DownloadSection;
