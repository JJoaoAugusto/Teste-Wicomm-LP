import BannerFullDeskCongresso from "../../../assets/BannerFullDeskCongresso.svg";
import { Section } from "./style";

export const AboutSection = () => {
  return (
    <Section>
      <figure className="container-banner">
        <img src={BannerFullDeskCongresso} alt="" />
      </figure>
      <div className="container-info-date">
        <p>Em Abril de 2025</p>
      </div>
      <article className="container-info-content">
        <div className="container-info-date-secondary">
          <p>10, 11 e 12 de abril</p>
        </div>
        <div className="container-info-content--primary">
          <p>CONGRESSO INTERNACIONAL HUNTINGTON DE MEDICINA REPRODUTIVA</p>
        </div>
        <div className="container-info-content--secondary">
          <p>10 de abril</p>
          <p>
            Business class "inovação e valor para gestores de saúde". Saiba mais
            abaixo
          </p>
        </div>
        <button>INSCREVA-SE</button>
      </article>
    </Section>
  );
};
