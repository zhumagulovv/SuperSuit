import { FC } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  type: "reset" | "submit" | "button";
  onclick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const ButtonContainer = styled.button<Props>`
  width: ${(props) =>
    props.size === "sm"
      ? "254px"
      : props.size === "md"
      ? "258px"
      : props.size === "lg"
      ? "100%"
      : "254px"};
  height: 48px;
  font-family: "Montserrat Alternates";
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  background-color: #ffca33;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button: FC<Props> = ({ children, type, size, onclick }) => {
  return (
    <ButtonContainer size={size} type={type} onClick={onclick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
