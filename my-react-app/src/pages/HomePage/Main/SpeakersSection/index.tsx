import EduardoLeme from "../../../../assets/eventImages/EduardoLeme.svg";
import EventImage from "../../../../assets/eventImages/EventImage.svg";
import BrasilICON2 from "../../../../assets/iconImages/BrasilICON2.svg";
import CalendaryICON from "../../../../assets/iconImages/CalendaryICON.svg";
import MoreICON from "../../../../assets/iconImages/MoreICON.svg";
import { Title, Text, Span, blue, white } from "../../../../styles/typography";
import { StyledSection } from "./style";

export const SpeakersSection = () => {
  return (
    <StyledSection className="speakers">
      <article className="speakers__apresentation">
        <div className="speakers__apresentation-title">
          <img src={CalendaryICON} alt="Icone que representa um calendario" />
          <Title color={white} size={32} weight={300}>
            11 e 12 de Abril de 2024
          </Title>
          <span className="bullet"></span>
          <Title color={blue} size={32} weight={300}>
            São Paulo/SP
          </Title>
        </div>
        <figure className="speakers__apresentation-vignette">
          <h1 className="vignet__content">VINHETA DO EVENTO</h1>
        </figure>
      </article>

      <article className="speakers__content">
        <div className="speakers__content-header">
          <Title color={blue} size={36} weight={500}>
            SPEAKERS
          </Title>
          <Title color={white} size={36} weight={300}>
            INTERNACIONAIS CONFIRMADOS
          </Title>
        </div>
        <ul className="speakers__content-list">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <li key={index} className="speakers__content-item">
                <figure className="speaker__content-figure">
                  <img src={BrasilICON2} alt="" className="nacionality__icon" />
                  <img
                    src={EduardoLeme}
                    alt="Foto de perfil do speaker Eduardo Leme"
                  />
                </figure>
                <Text size={12} weight={400}>
                  Eduardo Leme Alves da Mota
                </Text>
                <div className="item__subtext-box">
                  <img
                    src={MoreICON}
                    alt="Ícone que representa o simbolo de adição +"
                  />
                  <Text size={9} weight={300}>
                    SAIBA MAIS
                  </Text>
                </div>
              </li>
            ))}
        </ul>
        <button className="speakers__content-button">VER AGENDA</button>
      </article>

      <article className="speakers__event">
        <div className="speakers__event-container">
          <div className="speakers__event-about">
            <Title size={32} weight={300} line={44} color={white}>
              O FUTURO DA{" "}
              <Span size={32} weight={500} line={44} color={blue}>
                MEDICINA REPRODUTIVA
              </Span>{" "}
              PASSA AQUI
            </Title>
            <Text
              className="speaker__event-description"
              size={21}
              weight={300}
              line={30}
            >
              Nos dias 11 e 12 de Abril de 2025, grandes especialistas do mundo
              todo se reúnem novamente no Hotel Tivoli Mofarrej, em São Paulo,
              para apresentar as últimas novidades em reprodução assistida.
            </Text>
            <Text size={21} weight={300}>
              Nas últimas{" "}
              <Span size={21} weight={500}>
                5 edições
              </Span>{" "}
              tivemos mais de:
            </Text>
            <div className="speakers__event-info">
              <div className="speakers__event-info-item">
                <Title size={40} weight={300}>
                  50
                </Title>
                <Text size={18} weight={300} color={blue}>
                  palestrantes
                </Text>
                <Text size={18} weight={300} color={white}>
                  internacionais
                </Text>
              </div>
              <div className="speakers__event-info-item">
                <Title size={40} weight={300}>
                  3.500
                </Title>
                <Text size={18} weight={300} color={blue}>
                  participantes
                </Text>
                <Text size={18} weight={300} color={white}>
                  inscritos
                </Text>
              </div>
            </div>
          </div>
          <figure className="speakers__event-images">
            <img
              src={EventImage}
              alt="imagem do evento mostrando uma apresentação com o publico assistindo"
            />
            <Text size={11} weight={300}>
              Imagens do evento realizado em 2023
            </Text>
          </figure>
        </div>
      </article>
    </StyledSection>
  );
};
