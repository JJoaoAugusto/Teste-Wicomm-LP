import { StyledFooter } from "./style";
import LogoHuntington2024HorizBranco1 from "../../assets/logoImages/LogoHuntington2024HorizBranco1.svg";
import { Text } from "../../styles/typography";

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
          <Text size={16} weight={400}>
            CONTATO
          </Text>
          <Text size={12} weight={300} className="footer__text">
            congresso@huntington.com.br
          </Text>
          <Text size={16} weight={400}>
            SIGA-NOS INSTAGRAM
          </Text>
        </div>
        <div className="footer__rules">
          <Text size={16} weight={400}>
            Regras de Cancelamento
          </Text>
          <Text size={16} weight={400}>
            POLÍTICA DE PRIVACIDADE
          </Text>
        </div>
      </div>
    </StyledFooter>
  );
};
