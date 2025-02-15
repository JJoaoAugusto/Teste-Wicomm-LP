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
    <StyledSection className="sponsors">
      <article className="sponsors__realization">
        <p className="sponsors__title">Realização</p>
        <div className="sponsors__logo">
          <figure>
            <img src={LogoHuntington2024HorizBranco1} alt="Logo Huntington" />
          </figure>
        </div>
      </article>

      <div className="sponsors__gold-silver">
        <article className="sponsors__sponsor">
          <p className="sponsors__title">PATROCÍNIO OURO</p>
          <div className="sponsors__list">
            <figure>
              <img src={LogoOrganon} alt="Logo Organon" />
            </figure>
            <figure>
              <img src={LogoMerck} alt="Logo Merck" />
            </figure>
          </div>
        </article>
        <article className="sponsors__sponsor">
          <p className="sponsors__title">PATROCÍNIO PRATA</p>
          <div className="sponsors__list">
            <figure>
              <img src={LogoDasa} alt="Logo Dasa" />
            </figure>
            <figure>
              <img src={LogoIngamed} alt="Logo Ingamed" />
            </figure>
          </div>
        </article>
      </div>

      <article className="sponsors__bronze">
        <p className="sponsors__title">PATROCÍNIO BRONZE</p>
        <div className="sponsors__bronze-list">
          <div className="sponsors__list">
            <figure>
              <img src={LogoAbbott} alt="Logo Abbott" />
            </figure>
            <figure>
              <img src={LogoCRH} alt="Logo CRH" />
            </figure>
          </div>
          <div className="sponsors__list">
            <figure>
              <img src={LogoCrioBrasil} alt="Logo CrioBrasil" />
            </figure>
            <figure>
              <img src={LogoFerring} alt="Logo Ferring" />
            </figure>
            <figure>
              <img src={LogoIgenomix} alt="Logo Igenomix" />
            </figure>
            <figure>
              <img src={LogoHandle} alt="Logo Handle" />
            </figure>
          </div>
          <div className="sponsors__list">
            <figure>
              <img src={LogoSpectrun} alt="Logo Spectrun" />
            </figure>
            <figure>
              <img src={LogoUCB} alt="Logo UCB" />
            </figure>
            <figure>
              <img src={LogoVitrolife} alt="Logo Vitrolife" />
            </figure>
          </div>
        </div>
      </article>

      <div className="sponsors__institutional-media">
        <article className="sponsors__sponsor">
          <p className="sponsors__title">APOIO INSTITUCIONAL</p>
          <div className="sponsors__list">
            <figure>
              <img src={LogoSBRH} alt="Logo SBRH" />
            </figure>
            <figure>
              <img src={LogoSBRA} alt="Logo SBRA" />
            </figure>
          </div>
        </article>
        <article className="sponsors__sponsor">
          <p className="sponsors__title">MÍDIA OFICIAL</p>
          <div className="sponsors__list">
            <figure>
              <img src={LogoSBRH} alt="Logo SBRH" />
            </figure>
            <figure>
              <img src={LogoSBRA} alt="Logo SBRA" />
            </figure>
          </div>
        </article>
      </div>
    </StyledSection>
  );
};
