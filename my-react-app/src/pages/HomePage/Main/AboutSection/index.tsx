import BannerFullDeskCongresso from "../../../../assets/BannerFullDeskCongresso.svg";
import { StyledSection } from "./style";

export const AboutSection = () => {
  return (
    <StyledSection>
      <figure className="about__banner">
        <img
          src={BannerFullDeskCongresso}
          alt="Banner do Congresso Huntington de Medicina Reprodutiva"
        />
      </figure>

      <article className="about__content">
        <div className="about__header">
          <p className="about__header-text">EM ABRIL DE 2025</p>
          <p className="about__header-text">RESERVE SUA AGENDA</p>
        </div>

        <div className="about__info">
          <div className="about__info-item">
            <p className="about__info-text">10, 11 e 12 de Abril</p>
            <p className="about__info-text">São Paulo/SP</p>
          </div>

          <p className="about__description">
            CONGRESSO INTERNACIONAL HUNTINGTON DE MEDICINA REPRODUTIVA
          </p>

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
