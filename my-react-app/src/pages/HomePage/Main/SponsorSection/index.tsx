import LogoHuntington2024HorizBranco1 from "../../../../assets/LogoHuntington2024HorizBranco1.svg";
import LogoOrganon from "../../../../assets/LogoOrganon.svg";
import LogoMerck from "../../../../assets/LogoMerck.svg";
import LogoDasa from "../../../../assets/LogoDasa.svg";
import LogoIngamed from "../../../../assets/LogoIngamed.svg";
import LogoAbbott from "../../../../assets/LogoAbbott.svg";
import LogoCRH from "../../../../assets/LogoCRH.svg";
import LogoCrioBrasil from "../../../../assets/LogoCrioBrasil.svg";
import LogoFerring from "../../../../assets/LogoFerring.svg";
import LogoIgenomix from "../../../../assets/LogoIgenomix.svg";
import LogoHandle from "../../../../assets/LogoHandle.svg";
import LogoSpectrun from "../../../../assets/LogoSpectrun.svg";
import LogoUCB from "../../../../assets/LogoUcb.svg";
import LogoVitrolife from "../../../../assets/LogoVitrolife.svg";
import LogoSBRH from "../../../../assets/LogoSBRH.svg";
import LogoSBRA from "../../../../assets/LogoSBRA.svg";
import { StyledSection } from "./style";

export const SponsorsSection = () => {
  return (
    <StyledSection>
      <article className="sponsors">
        <p className="sponsors__title title-4">Realização</p>
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
          <p className="sponsors__title title-4">PATROCÍNIO OURO</p>
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
          <p className="sponsors__title title-4">PATROCÍNIO PRATA</p>
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
        <p className="sponsors__title title-4">PATROCÍNIO BRONZE</p>
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
          <p className="sponsors__title title-4">APOIO INSTITUCIONAL</p>
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
          <p className="sponsors__title title-4">MÍDIA OFICIAL</p>
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
