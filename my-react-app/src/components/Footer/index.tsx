import { StyledFooter } from "./style";
import { Text } from "../../styles/typography";
import LogoHuntington2024HorizBranco1 from "../../assets/logoImages/LogoHuntington2024HorizBranco1.svg";
import IconInstagram from "../../assets/iconImages/IconInstagram.svg";

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
          <div className="footer__social-media">
            <Text size={16} weight={400}>
              SIGA-NOS
            </Text>
            <img
              src={IconInstagram}
              alt="Ícone que reprenta o símbolo da rede social Instagram"
            />
            <Text size={12} weight={300}>
              INSTAGRAM
            </Text>
          </div>
        </div>
        <div className="footer__rules">
          <Text size={16} weight={400} className="footer__rules-policy">
            REGRAS DE CANCELAMENTO
          </Text>
          <Text size={16} weight={400} className="footer__rules-privacy">
            POLÍTICA DE PRIVACIDADE
          </Text>
        </div>
      </div>
    </StyledFooter>
  );
};
