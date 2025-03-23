import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../shared/ui/container";
import Button from "../../shared/ui/button";
import useGetProductById from "../../hooks/useGetProductById";

const ViewProduct: FC = () => {
  const { data, id } = useGetProductById();

  return (
    <Container>
      <ViewProductContainer>
        <ViewProductRouter>
          <HomeRouter to="/">Главная / </HomeRouter>
          <ProductRouter to={`/:${id}`}>{data?.name}</ProductRouter>
        </ViewProductRouter>
        <ViewProductContent>
          <ProductImage>
            <img src={data?.image} alt="product image" />
          </ProductImage>
          <ProductContent>
            <ProductTitle>{data?.name}</ProductTitle>
            <ProductTel href="tel: +996774814583" target="_blank">
              0774814583
            </ProductTel>
            <ProductPrice>{data?.price}₽/сутки.</ProductPrice>
            <ProductContentEquipment>
              <EquipmentTitle>Комплектация:</EquipmentTitle>
              <EquipmentType>
                {Array.isArray(data?.equipment) && data.equipment.length > 0 ? (
                  data.equipment.map((item, index) => (
                    <EquipmentTypeText key={index}>{item}</EquipmentTypeText>
                  ))
                ) : (
                  <EquipmentTypeText>Нет комплектации</EquipmentTypeText>
                )}
              </EquipmentType>
            </ProductContentEquipment>
            <ProductContentPrice>
              <PriceTitle>Размер:</PriceTitle>
              <PriceTitleSizes>
                <Size>48</Size>
                <Size>50</Size>
                <Size>52</Size>
              </PriceTitleSizes>
            </ProductContentPrice>
            <Button size="sm" type="button">
              Оставить заявку
            </Button>
          </ProductContent>
        </ViewProductContent>
        <ViewProductDesc>
          <DescTitle>Описание</DescTitle>
          <div>
            {Array.isArray(data?.description) && data.description.length > 0 ? (
              data.description.map((item, index) => (
                <DescText key={index}>{item}</DescText>
              ))
            ) : (
              <DescText>Нет комплектации</DescText>
            )}
          </div>
        </ViewProductDesc>
      </ViewProductContainer>
    </Container>
  );
};

export default ViewProduct;

const ViewProductContainer = styled.section`
  padding: 34px 0 64px;
  margin-top: 32px;
  margin-bottom: 86px;

  @media only screen and (max-width: 1024px) {
    padding: 0px 10px;
  }
`;

const ViewProductRouter = styled.div`
  display: flex;
  column-gap: 5px;
`;

const HomeRouter = styled(Link)`
  font-family: "Montserrat Alternates";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-decoration: none;
  color: #041a3f99;
`;

const ProductRouter = styled(Link)`
  font-family: "Montserrat Alternates";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-decoration: none;
  color: #041a3f;
`;

const ViewProductContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 120px;
  margin-top: 48px;
  @media screen and (min-width: 960px) and (max-width: 1024px) {
    column-gap: 100px;
  }
  @media screen and (min-width: 640px) and (max-width: 960px) {
    column-gap: 20px;
  }

  @media only screen and (max-width: 640px) {
    display: block;
    place-items: center;
  }
`;

const ProductImage = styled.div`
  max-width: 407px;
  width: 100%;
  height: 564px;
  background-color: #ffffff;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 960px) and (max-width: 1024px) {
    max-width: 380px;
    height: 500px;
  }

  @media screen and (min-width: 640px) and (max-width: 960px) {
    max-width: 300px;
    height: 400px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 300px;
    height: 375px;
  }
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 52px;
  font-weight: 700;
  line-height: 72px;
  margin: 0px;

  @media screen and (min-width: 640px) and (max-width: 960px) {
    font-size: 42px;
    line-height: 58px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 32px;
    line-height: 39px;
    margin-top: 32px;
  }
`;

const ProductTel = styled.a`
  text-decoration: none;
  font-family: "Montserrat Alternates";
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #041a3f99;
  margin-top: 12px;
`;

const ProductPrice = styled.p`
  font-family: "Montserrat Alternates";
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  color: #f7bd29;
  margin: 24px 0;

  @media only screen and (max-width: 1024px) {
    margin: 12px 0;
  }

  @media only screen and (max-width: 640px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

const ProductContentEquipment = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const EquipmentTitle = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  color: #041a3f;
  margin: 0px;

  @media only screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const EquipmentType = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
`;

const EquipmentTypeText = styled.span`
  font-family: "Montserrat Alternates";
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #041a3fcc;
`;

const ProductContentPrice = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 24px 0px;
`;

const PriceTitle = styled.h2`
  font-family: "Montserrat Alternates";
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  color: #041a3f;
  margin: 0px;

  @media only screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const PriceTitleSizes = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const Size = styled.span`
  width: 32px;
  height: 32px;
  border: 1px solid #041a3f;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media only screen and (max-width: 640px) {
    width: 28px;
    height: 28px;
    font-size: 16px;
    line-height: 22px;
  }
`;

const ViewProductDesc = styled.div``;

const DescTitle = styled.h2`
  font-family: "Montserrat Alternates";
  font-weight: 800;
  font-size: 24px;
  line-height: 29.26px;
  letter-spacing: 0%;
  color: #041a3f;
  margin: 48px 0 16px 0;

  @media only screen and (max-width: 640px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const DescText = styled.p`
  font-family: "Montserrat Alternates";
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  letter-spacing: 0%;
  color: #041a3fcc;
`;
