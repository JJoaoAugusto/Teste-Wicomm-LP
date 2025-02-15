import { StyledSection } from "./style";

export const AddressSection = () => {
  return (
    <StyledSection>
      <article className="address">
        <div className="address__info">
          <p className="address__info-title">COMO CHEGAR</p>
          <p className="address__info-subtitle">ENDEREÇO</p>
          <div className="address__info-details">
            <p>Hotel Tivoli Mofarrej</p>
            <p>São Paulo/SP - Brasil</p>
            <p>Alameda Santos, 1437 - Cerqueira César, São Paulo</p>
          </div>
        </div>
        <div className="address__map">
          <p>Aqui estará o mapa</p>
        </div>
      </article>
    </StyledSection>
  );
};
