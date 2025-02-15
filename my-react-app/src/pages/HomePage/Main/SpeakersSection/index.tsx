import { StyledSection } from "./style";

export const SpeakersSection = () => {
  return (
    <StyledSection className="speakers">
      <article className="speakers__apresentation">
        <div className="speakers__apresentation-title">
          <img src="" alt="" />
          <p>11 e 12 de Abril de 2024</p>
          <p>São Paulo</p>
        </div>
        <figure className="speakers__apresentation-vignette">
          <p>VINHETA DO EVENTO</p>
        </figure>
      </article>
      <article className="speakers__speakerss">
        <p className="speakers__speakerss-title">
          SPEAKERsS INTERNACIONAIS CONFIRMADOS
        </p>
        <ul className="speakers__speakerss-list">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <li key={index} className="speakers__speakerss-item">
                <img src="" alt="" />
                <p>Eduardo Leme Alves da Mota</p>
                <p></p>
              </li>
            ))}
        </ul>
        <button className="speakers__speakerss-button">VER AGENDA</button>
      </article>
      <article className="speakers__event">
        <div className="speakers__event-about">
          <p className="speakers__event-about-title">
            O FUTURO DA MEDICINA REPRODUTIVA PASSA AQUI
          </p>
          <p className="speakers__event-about-description">
            Nos dias 11 e 12 de Abril de 2025, grandes especialistas do mundo
            todo se reúnem novamente no Hotel Tivoli Mofarrej, em São Paulo,
            para apresentar as últimas novidades em reprodução assistida.
          </p>
          <p className="speakers__event-about-stats">
            Nas últimas 5 edições tivemos mais de:
          </p>
          <div className="speakers__event-informations">
            <div className="speakers__event-info">
              <p>50</p>
              <p>palestrantes</p>
              <p>internacionais</p>
            </div>
            <div className="speakers__event-info">
              <p>3.500</p>
              <p>participantes</p>
              <p>inscritos</p>
            </div>
          </div>
        </div>
        <figure className="speakers__event-images">
          <img src="" alt="" />
          <p>Imagens do evento realizado em 2023</p>
        </figure>
      </article>
    </StyledSection>
  );
};
