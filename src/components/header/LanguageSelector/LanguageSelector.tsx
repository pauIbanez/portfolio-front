import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import { useEffect, useState, useRef, useCallback } from "react";
import languages from "../../../data/languages/languages";

const Holder = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const SelectorWrapper = styled.div<{ $visible: boolean }>`
  background-color: ${(props) =>
    props.$visible ? Colors.backgroundGray : "transparent"};

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.$visible &&
    "box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);"}
  overflow: hidden;
  width: 80px;
`;
const Selector = styled.button`
  font-family: inherit;
  border: none;
  display: flex;
  align-items: center;
  background: none;

  margin: 0;

  padding: 7px 10px 5px 10px;

  font-size: 16px;
  color: ${Colors.textGray};
  gap: 6px;

  cursor: pointer;
`;

const LanguageItem = styled.button`
  font-family: inherit;
  border: none;
  display: flex;
  align-items: center;
  background: none;
  width: 80px;

  margin: 0;

  padding: 5px 10px;

  font-size: 15px;
  color: ${Colors.textGray};

  cursor: pointer;

  &:hover {
    background-color: ${Colors.main};
    color: white;
  }
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [active, setActive] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const onSelectorClick = () => {
    setActive((currentActive) => !currentActive);
  };

  const onLanguageClick = (lanuageCode: string) => {
    i18n.changeLanguage(lanuageCode);
    setActive(false);
  };

  const renderItems = languages.map((language) => (
    <LanguageItem
      key={language.code}
      onClick={() => onLanguageClick(language.code)}
    >
      {language.label}
    </LanguageItem>
  ));

  const popUpHandler = useCallback(
    ({ target }: MouseEvent) => {
      if (active) {
        if (!menuRef.current?.contains(target as Node)) {
          setActive(false);
        }
      }
    },
    [active]
  );

  useEffect(() => {
    window.addEventListener("mousedown", popUpHandler);
    return () => window.removeEventListener("mousedown", popUpHandler);
  }, [popUpHandler]);

  return (
    <Holder>
      <SelectorWrapper $visible={active} ref={menuRef}>
        <Selector onClick={onSelectorClick}>
          {i18n.language.toLocaleUpperCase()}
          <img
            src="/media/icons/filter.svg"
            alt="filter"
            height={25}
            width={25}
          />
        </Selector>
        {active && renderItems}
      </SelectorWrapper>
    </Holder>
  );
};

export default LanguageSelector;
