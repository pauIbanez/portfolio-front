import styled from "styled-components";
import CVSection from "../../CVSection/CVSection";
import Button from "../../../Button/Button";
import ColoredText from "../../../textComponents/ColoredText/ColoredText";
import Colors from "../../../../data/style/Colors";
import { useState, useCallback, useContext } from "react";
import { Errorr, ErrorrContext } from "react-errorr";
import useSections from "../../../../hooks/useSections";
import ResponsiveContext from "../../../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import {
  downloadButtons,
  textSizes,
} from "../../../../data/Pages/responsive/cvPage";

const Content = styled.div<{ $size: number }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: ${(props) => props.$size}px;
`;

const DownloadHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
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

  & > p {
    font-size: 10px;
    white-space: pre-line;
  }
`;

const BlueLabel = styled.label`
  font-size: 12px;
  cursor: pointer;
  user-select: none;

  display: flex;
  gap: 5px;
  align-items: center;
`;

const CheckMark = styled.div<{ isChecked: boolean; hasError: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  width: 20px;

  border: ${(props) => (props.hasError ? "solid 2px red" : "none")};
  border-radius: 5px;

  background-color: ${(props) =>
    props.isChecked ? Colors.main : Colors.disabledMain};
`;

const DownloadSection = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isErrorActive, setErrorActive] = useState<boolean>(false);
  const { activateErrorr, forceRemoveErrorr } = useContext(ErrorrContext);
  const { currentWidthBreakPoint } = useContext(ResponsiveContext);
  const { sections } = useSections();

  const onClick = useCallback(
    (link: string) => {
      if (isChecked) {
        console.log("download: " + link);
        return;
      }

      setErrorActive(true);
      activateErrorr("tos");
    },
    [activateErrorr, isChecked]
  );

  const toggleCheck = useCallback(() => {
    setIsChecked(!isChecked);
    setErrorActive(false);
    forceRemoveErrorr("tos");
  }, [forceRemoveErrorr, isChecked]);

  return (
    <CVSection title={sections.download.title}>
      <Content $size={textSizes[currentWidthBreakPoint].texts}>
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
                      size: downloadButtons[currentWidthBreakPoint].size,
                    }}
                  />
                  <Button
                    onClick={() => onClick(item.link)}
                    styleObject={{
                      height: downloadButtons[currentWidthBreakPoint].height,
                      width: downloadButtons[currentWidthBreakPoint].width,
                      radius: downloadButtons[currentWidthBreakPoint].radius,
                      fontSize: downloadButtons[currentWidthBreakPoint].size,
                    }}
                    disabled={isErrorActive}
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
          <BlueLabel htmlFor="tos">
            <Errorr
              name="tos"
              message={sections.download.checkmarkError}
              options={{
                positioning: {
                  inline: "center",
                },
                activeTime: 3000,
              }}
            >
              <CheckMark
                isChecked={isChecked}
                hasError={isErrorActive}
                data-testid="checkmark"
              />
            </Errorr>
            <input
              type="checkbox"
              name="tos"
              id="tos"
              onChange={toggleCheck}
              style={{ display: "none" }}
            />
            {sections.download.checkmark}
          </BlueLabel>
        </DisclaimerHolder>
      </Content>
    </CVSection>
  );
};

export default DownloadSection;
