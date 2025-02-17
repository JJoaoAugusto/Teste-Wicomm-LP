import { blue, Title, white } from "../../../../../styles/typography";
import IconCalendary from "../../../../../assets/iconImages/IconCalendary.svg";
import { StyledArticle } from "./style";

export const SpeakerApresentationArticle = () => {
  return (
    <StyledArticle>
      <div className="speakers__apresentation-title">
        <img src={IconCalendary} alt="Icone que representa um calendario" />
        <Title color={white} size={32} weight={300}>
          11 e 12 de Abril de 2024
        </Title>
        <span className="bullet"></span>
        <Title color={blue} size={32} weight={300}>
          São Paulo/SP
        </Title>
      </div>
      <figure className="speakers__apresentation-vignette">
        <h1 className="vignet__content">VINHETA DO EVENTO</h1>
      </figure>
    </StyledArticle>
  );
};
