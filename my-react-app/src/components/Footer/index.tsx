import { StyledFooter } from "./style";
import LogoHuntington2024HorizBranco1 from "../../assets/LogoHuntington2024HorizBranco1.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container-footer">
        <figure className="container-footer--logo">
          <img src={LogoHuntington2024HorizBranco1} alt="" />
        </figure>
        <div className="container-footer--contacts">
          <p>CONTATO</p>
          <p>congresso@huntington.com.br</p>
          <p>SIGA-NOS INSTAGRAM</p>
        </div>
        <div className="container-footer--rules">
          <p>Regras de Cancelamento</p>
          <p>POLÍTICA DE PRIVACIDADE</p>
        </div>
      </div>
    </StyledFooter>
  );
};
