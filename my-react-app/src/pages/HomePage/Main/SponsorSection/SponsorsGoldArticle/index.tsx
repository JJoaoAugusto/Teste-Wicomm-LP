import { blue, Title } from "../../../../../styles/typography";
import LogoOrganon from "../../../../../assets/logoImages/LogoOrganon.svg";
import LogoMerck from "../../../../../assets/logoImages/LogoMerck.svg";

export const SponsorGoldArticle = () => {
  return (
    <article className="sponsors">
      <Title className="sponsors__title" size={24} weight={500} color={blue}>
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
  );
};
