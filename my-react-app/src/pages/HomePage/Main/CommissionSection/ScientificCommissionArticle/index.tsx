import {
  Title,
  Text,
  Span,
  blue,
  white,
} from "../../../../../styles/typography";
import EduardoLemeBig from "../../../../../assets/eventImages/EduardoLemeBig.svg";
import { StyledArticle } from "./style";

export const ScientificCommissionArticle = () => {
  return (
    <StyledArticle>
      <Title size={28} weight={500} color={blue}>
        COMISSÃO{" "}
        <Span size={28} weight={300} color={white}>
          CIENTÍFICA
        </Span>
      </Title>
      <ul className="commission__scientific-list">
        {Array.from({ length: 9 }).map((_, index) => (
          <li key={index} className="commission__card">
            <figure className="commission__card-figure">
              <img
                src={EduardoLemeBig}
                alt="Foto de perfil do Eduardo leme Alves da Mota"
                className="commission__card-img"
              />
            </figure>
            <div className="commission-card-content">
              <div className="commission__card-info">
                <Text size={16} weight={400}>
                  Eduardo Leme Alves da Mota
                </Text>
                <Text size={16} weight={300}>
                  CRM/SP 58.993
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
        ))}
      </ul>
    </StyledArticle>
  );
};
