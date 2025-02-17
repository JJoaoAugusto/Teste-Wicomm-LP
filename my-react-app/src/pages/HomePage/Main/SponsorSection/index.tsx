import LogoHuntington2024HorizBranco1 from "../../../../assets/logoImages/LogoHuntington2024HorizBranco1.svg";
import LogoOrganon from "../../../../assets/logoImages/LogoOrganon.svg";
import LogoMerck from "../../../../assets/logoImages/LogoMerck.svg";
import LogoDasa from "../../../../assets/logoImages/LogoDasa.svg";
import LogoIngamed from "../../../../assets/logoImages/LogoIngamed.svg";
import LogoAbbott from "../../../../assets/logoImages/LogoAbbott.svg";
import LogoCRH from "../../../../assets/logoImages/LogoCRH.svg";
import LogoCrioBrasil from "../../../../assets/logoImages/LogoCrioBrasil.svg";
import LogoFerring from "../../../../assets/logoImages/LogoFerring.svg";
import LogoIgenomix from "../../../../assets/logoImages/LogoIgenomix.svg";
import LogoHandle from "../../../../assets/logoImages/LogoHandle.svg";
import LogoSpectrun from "../../../../assets/logoImages/LogoSpectrun.svg";
import LogoUCB from "../../../../assets/logoImages/LogoUcb.svg";
import LogoVitrolife from "../../../../assets/logoImages/LogoVitrolife.svg";
import LogoSBRH from "../../../../assets/logoImages/LogoSBRH.svg";
import LogoSBRA from "../../../../assets/logoImages/LogoSBRA.svg";
import { StyledSection } from "./style";
import { blue, Title } from "../../../../styles/typography";

export const SponsorsSection = () => {
  return (
    <StyledSection>
      <article className="sponsors">
        <Title className="sponsors__title" size={24} weight={500} color={blue}>
          REAlIZAÇÃO
        </Title>
        <ul className="sponsors__list">
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoHuntington2024HorizBranco1}
                alt="Logo Huntington"
                className="sponsors__list-img"
              />
            </figure>
          </li>
        </ul>
      </article>

      <div className="sponsors__container">
        <article className="sponsors">
          <Title
            className="sponsors__title"
            size={24}
            weight={500}
            color={blue}
          >
            PATROCÍNIO OURO
          </Title>
          <ul className="sponsors__list">
            <li className="sponsors__list-card">
              <figure className="sponsors__list-figure">
                <img
                  src={LogoOrganon}
                  alt="Logo Organon"
                  className="sponsors__list-img"
                />
              </figure>
            </li>
            <li className="sponsors__list-card">
              <figure className="sponsors__list-figure">
                <img
                  src={LogoMerck}
                  alt="Logo Merck"
                  className="sponsors__list-img"
                />
              </figure>
            </li>
          </ul>
        </article>

        <article className="sponsors">
          <Title
            className="sponsors__title"
            size={24}
            weight={500}
            color={blue}
          >
            PATROCÍNIO PRATA
          </Title>
          <ul className="sponsors__list">
            <li className="sponsors__list-card">
              <figure className="sponsors__list-figure">
                <img
                  src={LogoDasa}
                  alt="Logo Dasa"
                  className="sponsors__list-img"
                />
              </figure>
            </li>
            <li className="sponsors__list-card">
              <figure className="sponsors__list-figure">
                <img
                  src={LogoIngamed}
                  alt="Logo Ingamed"
                  className="sponsors__list-img"
                />
              </figure>
            </li>
          </ul>
        </article>
      </div>

      <article className="sponsors">
        <Title className="sponsors__title" size={24} weight={500} color={blue}>
          PATROCÍNIO BRONZE
        </Title>
        <ul className="sponsors__list">
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoAbbott}
                alt="Logo Abbott"
                className="sponsors__list-img"
              />
            </figure>
          </li>
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoCRH}
                alt="Logo CRH"
                className="sponsors__list-img"
              />
            </figure>
          </li>
        </ul>
        <ul className="sponsors__list">
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoCrioBrasil}
                alt="Logo CrioBrasil"
                className="sponsors__list-img"
              />
            </figure>
          </li>
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoFerring}
                alt="Logo Ferring"
                className="sponsors__list-img"
              />
            </figure>
          </li>
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoIgenomix}
                alt="Logo Igenomix"
                className="sponsors__list-img"
              />
            </figure>
          </li>
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoHandle}
                alt="Logo Handle"
                className="sponsors__list-img"
              />
            </figure>
          </li>
        </ul>
        <ul className="sponsors__list">
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoSpectrun}
                alt="Logo Spectrun"
                className="sponsors__list-img"
              />
            </figure>
          </li>
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoUCB}
                alt="Logo UCB"
                className="sponsors__list-img"
              />
            </figure>
          </li>
          <li className="sponsors__list-card">
            <figure className="sponsors__list-figure">
              <img
                src={LogoVitrolife}
                alt="Logo Vitrolife"
                className="sponsors__list-img"
              />
            </figure>
          </li>
        </ul>
      </article>

      <div className="sponsors__container">
        <article className="sponsors">
          <Title
            className="sponsors__title"
            size={24}
            weight={500}
            color={blue}
          >
            APOIO INSTITUCIONAL
          </Title>
          <ul className="sponsors__list">
            <li className="sponsors__list-card">
              <figure className="sponsors__list-figure">
                <img
                  src={LogoSBRH}
                  alt="Logo SBRH"
                  className="sponsors__list-img"
                />
              </figure>
            </li>
            <li className="sponsors__list-card">
              <figure className="sponsors__list-figure">
                <img
                  src={LogoSBRA}
                  alt="Logo SBRA"
                  className="sponsors__list-img"
                />
              </figure>
            </li>
          </ul>
        </article>
        <article className="sponsors">
          <Title
            className="sponsors__title"
            size={24}
            weight={500}
            color={blue}
          >
            MÍDIA OFICIAL
          </Title>
          <ul className="sponsors__list">
            <li className="sponsors__list-card">
              <figure className="sponsors__list-figure">
                <img
                  src={LogoSBRH}
                  alt="Logo SBRH"
                  className="sponsors__list-img"
                />
              </figure>
            </li>
            <li className="sponsors__list-card">
              <figure className="sponsors__list-figure">
                <img
                  src={LogoSBRA}
                  alt="Logo SBRA"
                  className="sponsors__list-img"
                />
              </figure>
            </li>
          </ul>
        </article>
      </div>
    </StyledSection>
  );
};
