import { FC } from "react";

import styled from "styled-components";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const Input: FC<Props> = (props) => {
  return <InputContainer {...props} />;
};

export default Input;

const InputContainer = styled.input`
  width: 94%;
  padding: 16px;
  border: 1px solid #e5e5e5;
  background-color: transparent;
  color: #041a3f66;
  font-family: "Montserrat Alternates";
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  margin-top: 16px;
  &:focus {
    outline: none;
  }
`;
