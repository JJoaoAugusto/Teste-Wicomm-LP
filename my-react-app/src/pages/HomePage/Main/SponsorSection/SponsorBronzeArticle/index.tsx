import { blue, Title } from "../../../../../styles/typography";
import LogoAbbott from "../../../../../assets/logoImages/LogoAbbott.svg";
import LogoCRH from "../../../../../assets/logoImages/LogoCRH.svg";
import LogoCrioBrasil from "../../../../../assets/logoImages/LogoCrioBrasil.svg";
import LogoFerring from "../../../../../assets/logoImages/LogoFerring.svg";
import LogoIgenomix from "../../../../../assets/logoImages/LogoIgenomix.svg";
import LogoHandle from "../../../../../assets/logoImages/LogoHandle.svg";
import LogoSpectrun from "../../../../../assets/logoImages/LogoSpectrun.svg";
import LogoUCB from "../../../../../assets/logoImages/LogoUcb.svg";
import LogoVitrolife from "../../../../../assets/logoImages/LogoVitrolife.svg";

export const SponsorBronzeArticle = () => {
  return (
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
            <img src={LogoCRH} alt="Logo CRH" className="sponsors__list-img" />
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
            <img src={LogoUCB} alt="Logo UCB" className="sponsors__list-img" />
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
  );
};
