import BannerFullDeskCongresso from "../../../assets/BannerFullDeskCongresso.svg";
import { StyledSection } from "./style";

export const AboutSection = () => {
  return (
    <StyledSection>
      <figure className="container-banner">
        <img src={BannerFullDeskCongresso} alt="" />
      </figure>
      <article className="container-content">
        <div className="container-content-title">
          <p>EM ABRIL DE 2025</p>
          <p>RESERVE SUA AGENDA</p>
        </div>
        <div className="container-content--info">
          <div>
            <p>10, 11 e 12 de Abril</p>
            <p>São Paulo/SP</p>
          </div>
          <p>CONGRESSO INTERNACIONAL HUNTINGTON DE MEDICINA REPRODUTIVA</p>
          <div>
            <p>10 de abril</p>
            <p>
              Business class "inovação e valor para gestores de saúde". Saiba
              mais abaixo
            </p>
          </div>
          <button>INSCREVA-SE</button>
        </div>
      </article>
    </StyledSection>
  );
};
