import { FC, useState } from "react";

import styled from "styled-components";

import closeSvg from "../../../public/icons/close.svg";
import Dropdown from "./dropdown";
import Input from "./input";
import Button from "./button";
import Checkbox from "./checkbox";

const Modal: FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <ModalContainer>
      <CloseImg>
        <img
          style={{ width: "100%", height: "100%" }}
          src={closeSvg}
          alt="close svg"
          loading="lazy"
        />
      </CloseImg>
      <ModalContent>
        <ModalTitle>Аренда костюма “Дарт Вейдер”</ModalTitle>
        <ModalDesc>
          Пожалуйста, укажите ваши контактные данные, чтобы мы забронировали
          костюм на ваше имя
        </ModalDesc>
        <Input type="text" placeholder="Как вас зовут?" />
        <Input type="phone" placeholder="+7 (977) 325 - 41 -60  " />
        <Dropdown />
        <ModalCheckbox>
          <Checkbox checked={checked} onChange={handleChange} />
          <ModalCheckboxText href="#">
            Я согласен на обработку моих персональных данных
          </ModalCheckboxText>
        </ModalCheckbox>
        <Button size="lg" type="submit">
          Оставить заявку
        </Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  position: relative;
`;

const CloseImg = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 590px;
  height: auto;
  padding: 48px 32px;
  background-color: #ffffff;
  border-radius: 30px;
  filter: drop-shadow(0px 2px 4px #000000);
`;

const ModalTitle = styled.h2`
  text-align: center;
  font-family: "Montserrat Alternates";
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  color: #041a3f;
`;

const ModalDesc = styled.p`
  text-align: center;
  font-family: "Montserrat Alternates";
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #041a3f;
`;

const ModalCheckbox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-bottom: 32px;
`;

const ModalCheckboxText = styled.a`
  text-decoration: none;
  font-family: "Montserrat Alternates";
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  color: #041a3f;
`;
