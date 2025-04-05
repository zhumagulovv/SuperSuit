import styled from "styled-components";

import bannerImage from "../../assets/images/banner.png";

import Button from "../../shared/ui/button";
import { Container } from "../../shared/ui/container";

const Banner = () => {
  return (
    <BannerContainer>
      <Container>
        <BannerContent>
          <BannerContentTitle>
            <BannerTitle>
              <BannerTitleStrong>Аренда костюмов</BannerTitleStrong> высшего
              качества по доступной цене
            </BannerTitle>
            <Button size="md" type="button" blockCenter="center">
              Подобрать костюм
            </Button>
          </BannerContentTitle>
          <BannerImage
            style={{ objectFit: "contain" }}
            src={bannerImage}
            alt="banner image"
            loading="lazy"
          />
        </BannerContent>
      </Container>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.section`
  margin-bottom: 120px;
  padding-top: 10px;
  padding-bottom: 50px;
  background-color: #ffffff;
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 960px) and (max-width: 1028px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const BannerContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 960px) and (max-width: 1024px) {
    width: 464px;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 320px) and (max-width: 640px) {
    padding: 0 46px;
  }

  @media only screen and (max-width: 320px) {
    padding: 0 10px;
  }
`;

const BannerTitle = styled.h2`
  font-family: "Montserrat Alternates";
  font-weight: 700;
  font-size: 52px;
  line-height: 72.8px;
  letter-spacing: 0%;
  color: #041a3f;
  margin-bottom: 48px;

  @media screen and (min-width: 640px) and (max-width: 1024px) {
    font-size: 42px;
    line-height: 58.8px;
    margin-bottom: 32px;
    text-align: center;
  }

  @media screen and (min-width: 320px) and (max-width: 640px) {
    font-size: 32px;
    line-height: 44.8px;
    margin-bottom: 32px;
    text-align: center;
  }

  @media only screen and (max-width: 320px) {
    font-size: 26px;
    line-height: 36.4px;
    margin-bottom: 32px;
  }
`;

const BannerTitleStrong = styled.strong`
  color: #f7bd29;
`;

const BannerImage = styled.img`
  width: 500px;
  height: 473px;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 495px;
    height: 340px;
  }

  @media screen and (min-width: 640px) and (max-width: 768px) {
    width: 433px;
    height: 283px;
  }

  @media screen and (min-width: 320px) and (max-width: 640px) {
    width: 382px;
    height: 255px;
  }

  @media only screen and (max-width: 320px) {
    width: 262px;
    height: 175px;
  }
`;
