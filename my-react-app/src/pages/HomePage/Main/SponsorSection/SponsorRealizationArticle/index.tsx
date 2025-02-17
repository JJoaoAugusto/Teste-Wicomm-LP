import { blue, Title } from "../../../../../styles/typography";
import LogoHuntington2024HorizBranco1 from "../../../../../assets/logoImages/LogoHuntington2024HorizBranco1.svg";

export const SponsorRealizationArticle = () => {
  return (
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
  );
};
