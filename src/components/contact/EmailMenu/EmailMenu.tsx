import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import { Link } from "react-router-dom";

const EmailButtonHolder = styled.div`
  height: 30px;
  z-index: 10;
`;

const ItemName = styled.p`
  font-weight: 700;
`;

const ItemValue = styled.p`
  color: inherit;
  font-family: inherit;
  text-decoration: none;
`;

const EmailButton = styled.button<{ $active: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => (props.$active ? Colors.main : "white")};
  gap: 5px;
  background-color: transparent;
  font-size: inherit;
  cursor: pointer;
  padding: 0;
  border: none;
  font-family: inherit;
`;

const EmailMenuWrapper = styled.div<{ $visible: boolean }>`
  background-color: ${(props) => (props.$visible ? "white" : Colors.main)};

  height: ${(props) => (!props.$visible ? "30px" : "fit-content")};

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$visible &&
    "box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);"}
  overflow: hidden;
`;
const CopyEmailButton = styled.button<{ $visible: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  color: ${Colors.textGray};

  opacity: ${(props) => (props.$visible ? "1" : "0")};
  pointer-events: ${(props) => (props.$visible ? "all" : "none")};

  height: 30px;
  padding-left: 40px;

  font-size: 13px;

  &:hover {
    color: white;
    background-color: ${Colors.main};
  }
`;

const EmailLink = styled(Link)<{ $visible: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  color: ${Colors.textGray};

  opacity: ${(props) => (props.$visible ? "1" : "0")};
  pointer-events: ${(props) => (props.$visible ? "all" : "none")};

  height: 30px;
  padding-left: 40px;

  font-size: 13px;
  text-decoration: none;

  &:hover {
    color: white;
    background-color: ${Colors.main};

    img {
      content: url(/media/icons/link.svg);
    }
  }
`;

const CoppiedAlert = styled.div<{ $active: boolean }>`
  position: fixed;
  top: ${(props) => (props.$active ? "40px" : "-70px")};
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 20px;
  background-color: white;
  color: ${Colors.textGray};
  border: 1px solid ${Colors.disabledMain};
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 23px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);

  transition: all ease-in-out 0.3s;
`;

const EmailMenu = () => {
  const [active, setActive] = useState<boolean>(false);
  const alert = useRef<number>(0);
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const onEmailClick = () => {
    setActive((currentActive) => !currentActive);
  };

  const onCopyEmailClick = () => {
    navigator.clipboard.writeText("pauibanez2001@gmail.com");
    setActive(false);
    alert.current++;
    let currentAlert = alert.current;
    setAlertActive(true);
    setTimeout(() => {
      if (alert.current === currentAlert) {
        setAlertActive(false);
      }
    }, 1500);
  };

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
    <>
      <CoppiedAlert $active={alertActive}>Email Coppied!</CoppiedAlert>
      <EmailButtonHolder>
        <EmailMenuWrapper $visible={active} ref={menuRef}>
          <EmailButton onClick={onEmailClick} $active={active}>
            <img
              height={30}
              width={30}
              src={`/media/icons/${active ? "email_main" : "email"}.svg`}
              alt="email"
            />
            <ItemName>
              {t("Contact.contactInfo.itemNames.email") + ":"}
            </ItemName>
            <ItemValue>pauibanez2001@gmail.com</ItemValue>
          </EmailButton>
          <CopyEmailButton $visible={active} onClick={onCopyEmailClick}>
            Copy email
          </CopyEmailButton>
          <EmailLink
            to={"mailto:pauibanez2001@gmail.com"}
            target="_blank"
            $visible={active}
          >
            Open email
            <img
              height={15}
              width={15}
              src="/media/icons/link_textGray.svg"
              alt="newscreen"
            />
          </EmailLink>
        </EmailMenuWrapper>
      </EmailButtonHolder>
    </>
  );
};

export default EmailMenu;
