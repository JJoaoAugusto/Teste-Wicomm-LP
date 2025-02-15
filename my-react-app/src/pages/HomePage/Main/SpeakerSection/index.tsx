import { StyledSection } from "./style";

export const SpeakerSection = () => {
  return (
    <StyledSection>
      <article className="container-apresentation">
        <div className="container-apresentation--title">
          <img src="" alt="" />
          <p>11 e 12 de Abril de 2024</p>
          <p>São Paulo</p>
        </div>
        <figure className="container-apresentation--vignette">
          <p>VINHETA DO EVENTO</p>
        </figure>
      </article>
      <article className="container-speakers">
        <p>SPEAKERS INTERNACIONAIS CONFIRMADOS</p>
        <ul className="container-speakers--list">
          <li>
            <img src="" alt="" />
            <p>Eduardo Leme Alves da Mota</p>
            <p></p>
          </li>
          <li>
            <img src="" alt="" />
            <p>Eduardo Leme Alves da Mota</p>
            <p></p>
          </li>
          <li>
            <img src="" alt="" />
            <p>Eduardo Leme Alves da Mota</p>
            <p></p>
          </li>
          <li>
            <img src="" alt="" />
            <p>Eduardo Leme Alves da Mota</p>
            <p></p>
          </li>
          <li>
            <img src="" alt="" />
            <p>Eduardo Leme Alves da Mota</p>
            <p></p>
          </li>
        </ul>
        <button className="container-speakers--buttom">VER AGENDA</button>
      </article>
      <article className="container-event">
        <div className="container-event--about">
          <p>O FUTURO DA MEDICINA REPRODUTIVA PASSA AQUI</p>
          <p>
            Nos dias 11 e 12 de Abril de 2025, grandes especialistas do mundo
            todo se reúnem novamente no Hotel Tivoli Mofarrej, em São Paulo,
            para apresentar as últimas novidades em reprodução assistida.
          </p>
          <p>Nas últimas 5 edições tivemos mais de:</p>
          <div className="container-event--informations">
            <div>
              <p>50</p>
              <p>palestrantes</p>
              <p>internacionais</p>
            </div>
            <div>
              <p>3.500</p>
              <p>participantes</p>
              <p>inscritos</p>
            </div>
          </div>
        </div>
        <figure className="container-event--images">
          <img src="" alt="" />
          <p>Imagens do evento realizado em 2023</p>
        </figure>
      </article>
    </StyledSection>
  );
};
