import { StyledSection } from "./style";
import MapIMG from "../../../../assets/MapIMG.svg";

export const AddressSection = () => {
  return (
    <StyledSection>
      <article className="address">
        <div className="address__info">
          <p className="address__info-title title__3">COMO CHEGAR</p>
          <div className="address__info-details">
            <p className="address__info-subtitle title__4">ENDEREÇO:</p>
            <p className="text__2">Hotel Tivoli Mofarrej</p>
            <p className="text__2">São Paulo/SP - Brasil</p>
            <p className="text__2">
              Alameda Santos, 1437 - Cerqueira César, São Paulo
            </p>
          </div>
        </div>
        <figure className="address__map">
          <img src={MapIMG} alt="Imagem do mapa do local do evento" />
        </figure>
      </article>
    </StyledSection>
  );
};
