import { StyledArticle } from "./style";
import { Title } from "../../../../../styles/typography";
import BannerFullDeskCongresso from "../../../../../assets/logoImages/BannerFullDeskCongresso.svg";
import IconLeftArrowBlue from "../../../../../assets/iconImages/IconLeftArrowBlue.svg";
import IconRightArrowBlue from "../../../../../assets/iconImages/IconRightArrowBlue.svg";

export const AboutArticle = () => {
  return (
    <StyledArticle
      style={{
        backgroundImage: `url(${BannerFullDeskCongresso})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={IconLeftArrowBlue} alt="" />
      <div className="about__header">
        <h1 className="about__header-title">EM ABRIL DE 2025</h1>
        <h2 className="about__header-subtitle">RESERVE SUA AGENDA</h2>
      </div>

      <div className="about__aside">
        <div className="about__aside-item">
          <h3 className="about__aside-title">10, 11 e 12 de Abril</h3>
          <h4 className="about__aside-subtitle">São Paulo/SP</h4>
        </div>
        <div className="about__aside-description">
          <Title size={50} weight={400}>
            CONGRESSO
          </Title>
          <Title size={38} weight={400}>
            INTERNACIONAL
          </Title>
          <Title size={46} weight={500}>
            HUNTINGTON
          </Title>
          <Title size={48} weight={400}>
            DE MEDICINA
          </Title>
          <Title size={44} weight={400}>
            REPRODUTIVA
          </Title>
        </div>
        <div className="about__aside-item">
          <p className="about__aside-text">10 de abril</p>
          <p className="about__aside-subtext">
            Business class "inovação e valor para
          </p>
          <p className="about__aside-subtext">
            gestores de saúde". Saiba mais abaixo.
          </p>
        </div>

        <button className="about__button">INSCREVA-SE</button>
      </div>
      <img src={IconRightArrowBlue} alt="" />
    </StyledArticle>
  );
};
