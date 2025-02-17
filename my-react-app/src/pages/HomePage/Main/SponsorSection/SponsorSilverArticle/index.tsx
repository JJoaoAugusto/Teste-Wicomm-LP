import { blue, Title } from "../../../../../styles/typography";
import LogoDasa from "../../../../../assets/logoImages/LogoDasa.svg";
import LogoIngamed from "../../../../../assets/logoImages/LogoIngamed.svg";

export const SponsorSilverArticle = () => {
  return (
    <article className="sponsors">
      <Title className="sponsors__title" size={24} weight={500} color={blue}>
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
  );
};
