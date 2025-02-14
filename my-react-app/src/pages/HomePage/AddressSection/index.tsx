import { Section } from "./style";

export const AddressSecrion = () => {
  return (
    <Section>
      <article className="container-address">
        <div className="container-address--info">
          <p>COMO CHEGAR</p>
          <p>ENDEREÇO</p>
          <div>
            <p>Hotel Tivoli Mofarrej</p>
            <p>São Paulo/SP - Brasil</p>
            <p>Alameda Santos, 1437 - Cerqueira César, São Paulo</p>
          </div>
        </div>
        <div className="container-address--map">
          <p>Aqui estará o mapa</p>
        </div>
      </article>
    </Section>
  );
};
