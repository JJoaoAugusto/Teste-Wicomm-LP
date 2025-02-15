import LogoHuntington2024HorizBranco1 from "../../assets/LogoHuntington2024HorizBranco1.svg";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader className="header">
      <nav className="header__nav">
        <img
          src={LogoHuntington2024HorizBranco1}
          alt="Logo do Congresso Huntington de Medicina Reprodutiva"
          className="header__logo"
        />
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="#sobre" className="header__menu-link">
              Sobre
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#speakers" className="header__menu-link">
              Speakers
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#agenda" className="header__menu-link">
              Agenda Científica
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#comissao" className="header__menu-link">
              Comissão Científica
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#patrocinadores" className="header__menu-link">
              Patrocinadores
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#faq" className="header__menu-link">
              FAQ
            </a>
          </li>
        </ul>
        <div className="header__actions">
          <button
            className="header__button"
            aria-label="Inscreva-se no congresso"
          >
            INSCREVA-SE
          </button>
          <fieldset className="header__language">
            <select className="header__language-select">
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
          </fieldset>
        </div>
      </nav>
    </StyledHeader>
  );
};
