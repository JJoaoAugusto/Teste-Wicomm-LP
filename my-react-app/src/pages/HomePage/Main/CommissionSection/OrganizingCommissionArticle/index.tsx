import {
  Title,
  Text,
  Span,
  blue,
  white,
} from "../../../../../styles/typography";
import MauricioChehin from "../../../../../assets/eventImages/MauricioChehin.svg";
import Alinelorenzon from "../../../../../assets/eventImages/Alinelorenzon.svg";
import { StyledArticle } from "./style";

export const CommissionOrganizingArticle = () => {
  return (
    <StyledArticle className="commission">
      <Title size={28} weight={500} color={blue}>
        COMISSÃO{" "}
        <Span size={28} weight={300} color={white}>
          ORGANIZADORA
        </Span>
      </Title>
      <ul className="commission__organizing-list">
        <li className="commission__card">
          <figure className="commission__card-figure">
            <img
              src={MauricioChehin}
              alt="Foto de perfil do Mauricio Chehin"
              className="commission__card-img"
            />
          </figure>
          <div className="commission-card-content">
            <div className="commission__card-info">
              <Text size={16} weight={400}>
                Mauricio Chehin
              </Text>
              <Text size={16} weight={300}>
                CRM/SP 58.345
              </Text>
            </div>
            <div className="commission__card-details">
              <Text size={14} weight={300}>
                Fundador da Huntington
              </Text>
              <Text size={14} weight={300}>
                Medicina Reprodutiva
              </Text>
            </div>
            <a href="" className="commission__card-link">
              VER BIO
            </a>
          </div>
        </li>
        <li className="commission__card">
          <figure className="commission__card-figure">
            <img
              src={Alinelorenzon}
              alt="Foto de perfil da Aline lorenzon"
              className="commission__card-img"
            />
          </figure>
          <div className="comission-card-content">
            <div className="commission__card-info">
              <Text size={16} weight={400}>
                Aline Lorenzon
              </Text>
              <Text size={16} weight={300}>
                CRM/SP 58.345
              </Text>
            </div>
            <div className="commission__card-details">
              <Text size={14} weight={300}>
                Fundador da Huntington
              </Text>
              <Text size={14} weight={300}>
                Medicina Reprodutiva
              </Text>
            </div>
            <a href="" className="commission__card-link">
              VER BIO
            </a>
          </div>
        </li>
      </ul>
    </StyledArticle>
  );
};
