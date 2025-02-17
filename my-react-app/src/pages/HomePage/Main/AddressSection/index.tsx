import { StyledSection } from "./style";
import MapIMG from "../../../../assets/eventImages/MapIMG.svg";
import { Text, Title } from "../../../../styles/typography";

export const AddressSection = () => {
  return (
    <StyledSection>
      <article className="address">
        <div className="address__info">
          <Title size={32} weight={400}>
            COMO CHEGAR
          </Title>
          <div className="address__info-details">
            <Text
              size={24}
              weight={500}
              className="address__info-subtitle title__4"
            >
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
        <figure className="address__map">
          <img src={MapIMG} alt="Imagem do mapa do local do evento" />
        </figure>
      </article>
    </StyledSection>
  );
};
