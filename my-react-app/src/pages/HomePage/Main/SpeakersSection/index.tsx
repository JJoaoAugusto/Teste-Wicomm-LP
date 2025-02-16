import { StyledSection } from "./style";
import EduardoLeme from "../../../../assets/EduardoLeme.svg";
import EventImage from "../../../../assets/EventImage.svg";

export const SpeakersSection = () => {
  return (
    <StyledSection className="speakers">
      <article className="speakers__apresentation">
        <div className="speakers__apresentation-title">
          <img src="" alt="" />
          <h3 className="title__tree">11 e 12 de Abril de 2024</h3>
          <h3 className="title__tree">São Paulo</h3>
        </div>
        <figure className="speakers__apresentation-vignette">
          <p>VINHETA DO EVENTO</p>
        </figure>
      </article>

      <article className="speakers__content">
        <h1 className="speakers__content-title title__two">
          SPEAKERS <span>INTERNACIONAIS CONFIRMADOS</span>
        </h1>
        <ul className="speakers__content-list">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <li key={index} className="speakers__content-item">
                <img
                  src={EduardoLeme}
                  alt="Foto de perfil do speaker Eduardo Leme"
                />
                <p className="text__for">Eduardo Leme Alves da Mota</p>
                <p className="text__for">+ SAIBA MAIS</p>
              </li>
            ))}
        </ul>
        <button className="speakers__content-button">VER AGENDA</button>
      </article>

      <article className="speakers__event">
        <div className="speakers__event-container">
          <div className="speakers__event-about">
            <h1 className="speakers__event-about-title title__two">
              O FUTURO DA MEDICINA REPRODUTIVA PASSA AQUI
            </h1>
            <p className="speakers__event-about-description text__one">
              Nos dias 11 e 12 de Abril de 2025, grandes especialistas do mundo
              todo se reúnem novamente no Hotel Tivoli Mofarrej, em São Paulo,
              para apresentar as últimas novidades em reprodução assistida.
            </p>
            <p className="speakers__event-about-stats text__two">
              Nas últimas 5 edições tivemos mais de:
            </p>
            <div className="speakers__event-info">
              <div className="speakers__event-info-item">
                <h1 className="title__one">50</h1>
                <p className="text__two">palestrantes</p>
                <p className="text__two">internacionais</p>
              </div>
              <div className="speakers__event-info-item">
                <h1 className="title__one">3.500</h1>
                <p className="text__two">participantes</p>
                <p>inscritos</p>
              </div>
            </div>
          </div>
          <figure className="speakers__event-images">
            <img
              src={EventImage}
              alt="imagem do evento mostrando uma apresentação com o publico assistindo"
            />
            <p>Imagens do evento realizado em 2023</p>
          </figure>
        </div>
      </article>
    </StyledSection>
  );
};
