import BannerFullDeskCongresso from "../../../../assets/logoImages/BannerFullDeskCongresso.svg";
import { Title } from "../../../../styles/typography";
import { StyledSection } from "./style";

export const AboutSection = () => {
  return (
    <StyledSection>
      <article
        className="about__content"
        style={{
          backgroundImage: `url(${BannerFullDeskCongresso})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about__header">
          <h1 className="about__header-title">EM ABRIL DE 2025</h1>
          <h2 className="about__header-subtitle">RESERVE SUA AGENDA</h2>
        </div>

        <div className="about__info">
          <div className="about__info-item">
            <h3 className="about__info-title">10, 11 e 12 de Abril</h3>
            <h4 className="about__info-subtitle">São Paulo/SP</h4>
          </div>
          <div className="about__info-description">
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
          <div className="about__info-item">
            <p className="about__info-text">10 de abril</p>
            <p className="about__info-subtext">
              Business class "inovação e valor para
            </p>
            <p className="about__info-subtext">
              gestores de saúde". Saiba mais abaixo.
            </p>
          </div>

          <button className="about__button">INSCREVA-SE</button>
        </div>
      </article>
    </StyledSection>
  );
};
