import { StyledSection } from "./style";
import MauricioChehin from "../../../../assets/eventImages/MauricioChehin.svg";
import Alinelorenzon from "../../../../assets/eventImages/Alinelorenzon.svg";
import Eduardoleme2 from "../../../../assets/eventImages/EduardoLeme2.svg";
import { blue, Span, Text, Title, white } from "../../../../styles/typography";

export const CommissionSection = () => {
  return (
    <StyledSection>
      <article className="commission">
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
      </article>

      <article className="commission">
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
                  src={Eduardoleme2}
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
      </article>
    </StyledSection>
  );
};
