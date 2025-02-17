import { StyledHeader } from "./style";
import LogoHuntington2024HorizBranco1 from "../../assets/logoImages/LogoHuntington2024HorizBranco1.svg";
import IconBrasil from "../../assets/iconImages/IconBrasil.svg";

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
            <a href="#about" className="header__menu-link">
              SOBRE
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#speakers" className="header__menu-link">
              SPEAKERS
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#calendar" className="header__menu-link">
              AGENDA CIENTÍFICA
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#commission" className="header__menu-link">
              COMISSÃO CIENTÍFICA
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#sponsors" className="header__menu-link">
              PATROCINADORES
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
            <figure>
              <img src={IconBrasil} alt="" />
            </figure>
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
