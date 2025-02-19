import { FC } from "react";

import styled from "styled-components";

import { Container } from "../../shared/ui/container";

import Card from "../card";

const Products: FC = () => {
  return (
    <Container>
      <ProductsTitle>Костюмы в наличии</ProductsTitle>
      <CardContainer>
        <Card />
      </CardContainer>
    </Container>
  );
};

export default Products;

const ProductsTitle = styled.h2`
  font-family: "Montserrat Alternates";
  font-weight: 700;
  font-size: 42px;
  line-height: 58.8px;
  letter-spacing: 0%;
  text-align: center;

  @media screen and (min-width: 960px) and (max-width: 1024px) {
    font-size: 42px;
    line-height: 58.8px;
  }

  @media screen and (min-width: 640px) and (max-width: 960px) {
    font-size: 36px;
    line-height: 50.4px;
  }

  @media screen and (min-width: 320px) and (max-width: 640px) {
    font-size: 28px;
    line-height: 39.2px;
  }

  @media only screen and (max-width: 320px) {
    font-size: 22px;
    line-height: 30.8px;
  }
`;

const CardContainer = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 0 20px;
  margin: 0;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 640px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
