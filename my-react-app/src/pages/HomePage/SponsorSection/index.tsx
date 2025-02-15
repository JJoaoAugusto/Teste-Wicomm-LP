import LogoHuntington2024HorizBranco1 from "../../../assets/LogoHuntington2024HorizBranco1.svg";
import LogoOrganon from "../../../assets/LogoOrganon.svg";
import LogoMerck from "../../../assets/LogoMerck.svg";
import LogoDasa from "../../../assets/LogoDasa.svg";
import LogoIngamed from "../../../assets/LogoIngamed.svg";
import LogoAbbott from "../../../assets/LogoAbbott.svg";
import LogoCRH from "../../../assets/LogoCRH.svg";
import LogoCrioBrasil from "../../../assets/LogoCrioBrasil.svg";
import LogoFerring from "../../../assets/LogoFerring.svg";
import LogoIgenomix from "../../../assets/LogoIgenomix.svg";
import LogoHandle from "../../../assets/LogoHandle.svg";
import LogoSpectrun from "../../../assets/LogoSpectrun.svg";
import LogoUCB from "../../../assets/LogoUcb.svg";
import LogoVitrolife from "../../../assets/LogoVitrolife.svg";
import LogoSBRH from "../../../assets/LogoSBRH.svg";
import LogoSBRA from "../../../assets/LogoSBRA.svg";
import { Section } from "./style";

export const SponsorSection = () => {
  return (
    <Section>
      <article className="container-sponsor">
        <p>Realização</p>
        <div>
          <figure>
            <img src={LogoHuntington2024HorizBranco1} alt="" />
          </figure>
        </div>
      </article>
      <div className="container-gold-silver">
        <article className="container-sponsor">
          <p>PATROCÍNIO OURO</p>
          <div className="container-sponsor--list">
            <figure>
              <img src={LogoOrganon} alt="" />
            </figure>
            <figure>
              <img src={LogoMerck} alt="" />
            </figure>
          </div>
        </article>
        <article className="container-sponsor">
          <p>PATROCÍNIO PRATA</p>
          <div className="container-sponsor--list">
            <figure>
              <img src={LogoDasa} alt="" />
            </figure>
            <figure>
              <img src={LogoIngamed} alt="" />
            </figure>
          </div>
        </article>
      </div>
      <article className="container-sponsor">
        <p>PATROCÍNIO BRONZE</p>
        <div className="container-bronze">
          <div className="container-sponsor--list">
            <figure>
              <img src={LogoAbbott} alt="" />
            </figure>
            <figure>
              <img src={LogoCRH} alt="" />
            </figure>
          </div>
          <div className="container-sponsor--list">
            <figure>
              <img src={LogoCrioBrasil} alt="" />
            </figure>
            <figure>
              <img src={LogoFerring} alt="" />
            </figure>
            <figure>
              <img src={LogoIgenomix} alt="" />
            </figure>
            <figure>
              <img src={LogoHandle} alt="" />
            </figure>
          </div>
          <div className="container-sponsor--list">
            <figure>
              <img src={LogoSpectrun} alt="" />
            </figure>
            <figure>
              <img src={LogoUCB} alt="" />
            </figure>
            <figure>
              <img src={LogoVitrolife} alt="" />
            </figure>
          </div>
        </div>
      </article>
      <div className="container-institutionalMidia">
        <article className="container-sponsor">
          <p>APOIO INSTITUCIONAL</p>
          <div className="container-sponsor--list">
            <figure>
              <img src={LogoSBRH} alt="" />
            </figure>
            <figure>
              <img src={LogoSBRA} alt="" />
            </figure>
          </div>
        </article>
        <article className="container-sponsor">
          <p>MÍDIA OFICIAl</p>
          <div className="container-sponsor--list">
            <figure>
              <img src={LogoSBRH} alt="" />
            </figure>
            <figure>
              <img src={LogoSBRA} alt="" />
            </figure>
          </div>
        </article>
      </div>
    </Section>
  );
};
