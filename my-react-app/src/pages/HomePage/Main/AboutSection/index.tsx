import BannerFullDeskCongresso from "../../../../assets/BannerFullDeskCongresso.svg";
import { StyledSection } from "./style";

export const AboutSection = () => {
  return (
    <StyledSection
      style={{
        backgroundImage: `url(${BannerFullDeskCongresso})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <article className="about__content">
        <div className="about__header">
          <h2 className="about__header-text title__two">EM ABRIL DE 2025</h2>
          <h2 className="about__header-text title__two">RESERVE SUA AGENDA</h2>
        </div>

        <div className="about__info">
          <div className="about__info-item">
            <h2 className="about__info-text title__tree">
              10, 11 e 12 de Abril
            </h2>
            <h4 className="about__info-text title__for">São Paulo/SP</h4>
          </div>

          <h2 className="about__description  title__two">
            CONGRESSO INTERNACIONAL HUNTINGTON DE MEDICINA REPRODUTIVA
          </h2>

          <div className="about__info-item">
            <p className="about__info-text">10 de abril</p>
            <p className="about__info-text">
              Business class "inovação e valor para gestores de saúde". Saiba
              mais abaixo
            </p>
          </div>

          <button className="about__button">INSCREVA-SE</button>
        </div>
      </article>
    </StyledSection>
  );
};
