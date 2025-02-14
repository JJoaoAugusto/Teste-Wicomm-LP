import LogoHuntington2024HorizBranco1 from "../../assets/LogoHuntington2024HorizBranco1.svg";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <img src={LogoHuntington2024HorizBranco1} alt="" />
        <ul>
          <li>
            <p>Sobre</p>
          </li>
          <li>
            <p>Speakers</p>
          </li>
          <li>
            <p>Agemda Científica</p>
          </li>
          <li>
            <p>Comissão Científica</p>
          </li>
          <li>
            <p>Patrocinadores</p>
          </li>
          <li>
            <p>FAQ</p>
          </li>
        </ul>
        <div>
          <button>INSCREVA-SE</button>
          <div>
            <select name="" id="">
              <option value="">PT</option>
              <option value="">EN</option>
            </select>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};
