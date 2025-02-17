import {
  Title,
  Text,
  Span,
  white,
  blue,
} from "../../../../../styles/typography";
import EventImage from "../../../../../assets/eventImages/EventImage.svg";
import { StyledArticle } from "./style";

export const SpeakersEventArticle = () => {
  return (
    <StyledArticle>
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
    </StyledArticle>
  );
};
