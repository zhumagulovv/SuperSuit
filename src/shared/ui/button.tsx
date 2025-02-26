import { FC } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  type: "reset" | "submit" | "button";
  blockCenter?: "center" | "none";
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const ButtonContainer = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media only screen and (max-width: 768px) {
    margin: ${(props) => (props.blockCenter === "center" ? "0 auto" : "0")};
  }
`;

const Button: FC<Props> = ({ children, type, size, blockCenter, onClick }) => {
  return (
    <ButtonContainer
      blockCenter={blockCenter}
      size={size}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
