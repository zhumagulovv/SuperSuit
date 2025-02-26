import { FC } from "react";
import { Fragment } from "react/jsx-runtime";

import styled from "styled-components";

import Button from "../../shared/ui/button";

import { Products } from "../../api/types/productTypes";

type IProps = {
  product: Products;
};

const Card: FC<IProps> = ({ product }) => {
  return (
    <Fragment>
      <CardItem>
        <CardImage src={product.image} alt="spider man image" loading="lazy" />
        <CardContent>
          <CardName>{product.name}</CardName>
          <CardSize>Размеры: 48-52</CardSize>
          <CardPrice>{product.price}₽/день.</CardPrice>
          <Button size="sm" type="button">
            Быстрый просмотр
          </Button>
          <CardStock
            style={{ color: product.count === 0 ? "red" : "#041a3f99" }}
          >
            {product.count === 0
              ? "Нет в наличии"
              : `В наличии: ${product.count}`}
          </CardStock>
        </CardContent>
      </CardItem>
    </Fragment>
  );
};

export default Card;

const CardItem = styled.li`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const CardImage = styled.img`
  width: 286px;
  height: 320px;

  @media screen and (min-width: 768px) and (max-width: 960px) {
    width: 160px;
    height: 180px;
  }

  @media screen and (min-width: 640px) and (max-width: 768px) {
    width: 250px;
    height: 280px;
  }

  @media only screen and (max-width: 640px) {
    width: 160px;
    height: 180px;
  }
`;

const CardContent = styled.div`
  padding: 32px 16px 18px 16px;
`;

const CardName = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  line-height: 33px;
  text-align: center;
  color: #041a3f;
`;

const CardSize = styled.p`
  font-family: "Montserrat Alternates";
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  line-height: 25px;
  text-align: center;
  color: #041a3f99;
  margin: 12px 0;
`;

const CardPrice = styled.h5`
  font-family: "Montserrat Alternates";
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  line-height: 25px;
  text-align: center;
  color: #041a3f;
  margin-bottom: 16px;
`;

const CardStock = styled.p`
  font-family: "Montserrat Alternates";
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  line-height: 25px;
  text-align: center;
  color: #041a3f99;
  margin-top: 16px;
`;
