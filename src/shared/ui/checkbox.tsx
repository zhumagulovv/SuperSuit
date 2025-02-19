import { FC } from "react";
import styled from "styled-components";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const Checkbox: FC<Props> = (props) => {
  return <CheckboxContainer type="checkbox" {...props} />;
};

export default Checkbox;

const CheckboxContainer = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`;
