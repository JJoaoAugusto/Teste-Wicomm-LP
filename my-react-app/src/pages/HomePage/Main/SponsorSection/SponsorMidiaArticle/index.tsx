import { blue, Title } from "../../../../../styles/typography";
import LogoSBRH from "../../../../../assets/logoImages/LogoSBRH.svg";
import LogoSBRA from "../../../../../assets/logoImages/LogoSBRA.svg";

export const SponsorMidiaArticle = () => {
  return (
    <article className="sponsors">
      <Title className="sponsors__title" size={24} weight={500} color={blue}>
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
  );
};
