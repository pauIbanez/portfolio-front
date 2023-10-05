import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import { useEffect, useState, useRef, useCallback } from "react";
import languages from "../../../data/languages/languages";

const Holder = styled.div`
  height: 37px;
`;

const SelectorWrapper = styled.div<{ $visible: boolean }>`
  background-color: ${(props) =>
    !props.$visible ? Colors.backgroundGray : "white"};

  height: ${(props) => (!props.$visible ? "37px" : "103px")};
  width: ${(props) => (!props.$visible ? "70px" : "80px")};

  transition: all ease-in-out 0.2s;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$visible &&
    "box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);"}
  overflow: hidden;
`;
const Selector = styled.button`
  font-family: inherit;
  border: none;
  display: flex;
  align-items: center;
  background: none;

  margin: 0;

  padding: 6px 10px 5px 10px;

  font-size: 16px;
  color: ${Colors.textGray};
  gap: 6px;

  cursor: pointer;
`;

const LanguageItem = styled.button<{ $visible: boolean }>`
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

  opacity: ${(props) => (props.$visible ? "1" : "0")};

  pointer-events: ${(props) => (props.$visible ? "all" : "none")};

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
    localStorage.setItem("locale", lanuageCode);
    setActive(false);
  };

  const renderItems = languages.map((language) => (
    <LanguageItem
      $visible={active}
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
        {renderItems}
      </SelectorWrapper>
    </Holder>
  );
};

export default LanguageSelector;
