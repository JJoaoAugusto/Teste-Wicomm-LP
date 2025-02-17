import { StyledArticle } from "./style";
import MapIMG from "../../../../../assets/eventImages/MapIMG.svg";
import { Text, Title } from "../../../../../styles/typography";

export const MapArticle = () => {
  return (
    <StyledArticle>
      <div className="map__info">
        <Title size={32} weight={400}>
          COMO CHEGAR
        </Title>
        <div className="map__info-details">
          <Text size={24} weight={500} className="map__info-subtitle title__4">
            ENDEREÇO:
          </Text>
          <Text size={18} weight={400}>
            Hotel Tivoli Mofarrej
          </Text>
          <Text size={18} weight={400}>
            São Paulo/SP - Brasil
          </Text>
          <Text size={18} weight={300}>
            Alameda Santos, 1437 - Cerqueira César, São Paulo
          </Text>
        </div>
      </div>
      <figure>
        <img src={MapIMG} alt="Imagem do mapa do local do evento" />
      </figure>
    </StyledArticle>
  );
};
