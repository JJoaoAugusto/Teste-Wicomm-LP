import { StyledFooter } from "./style";
import LogoHuntington2024HorizBranco1 from "../../assets/LogoHuntington2024HorizBranco1.svg";

export const Footer = () => {
  return (
    <StyledFooter className="footer">
      <div className="footer__container">
        <figure className="footer__logo">
          <img
            src={LogoHuntington2024HorizBranco1}
            alt="Logo do Congresso Huntington de Medicina Reprodutiva"
          />
        </figure>
        <div className="footer__contacts">
          <p className="footer__title">CONTATO</p>
          <p className="footer__text">congresso@huntington.com.br</p>
          <p className="footer__text">SIGA-NOS INSTAGRAM</p>
        </div>
        <div className="footer__rules">
          <p className="footer__text">Regras de Cancelamento</p>
          <p className="footer__text">POLÍTICA DE PRIVACIDADE</p>
        </div>
      </div>
    </StyledFooter>
  );
};
