import { Title, Text, white, blue } from "../../../../../styles/typography";
import IconBrasilBig from "../../../../../assets/iconImages/IconBrasilBig.svg";
import EduardoLeme from "../../../../../assets/eventImages/EduardoLeme.svg";
import IconMore from "../../../../../assets/iconImages/IconMore.svg";
import { StyledArticle } from "./style";

export const SpeakersContentArticle = () => {
  return (
    <StyledArticle>
      <div className="speakers__content-header">
        <Title color={blue} size={36} weight={500}>
          SPEAKERS
        </Title>
        <Title color={white} size={36} weight={300}>
          INTERNACIONAIS CONFIRMADOS
        </Title>
      </div>
      <ul className="speakers__content-list">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <li key={index} className="speakers__content-item">
              <figure className="speaker__content-figure">
                <img src={IconBrasilBig} alt="" className="nacionality__icon" />
                <img
                  src={EduardoLeme}
                  alt="Foto de perfil do speaker Eduardo Leme"
                />
              </figure>
              <Text size={12} weight={400}>
                Eduardo Leme Alves da Mota
              </Text>
              <div className="item__subtext-box">
                <img
                  src={IconMore}
                  alt="Ícone que representa o simbolo de adição +"
                />
                <Text size={9} weight={300}>
                  SAIBA MAIS
                </Text>
              </div>
            </li>
          ))}
      </ul>
      <button className="speakers__content-button">VER AGENDA</button>
    </StyledArticle>
  );
};
