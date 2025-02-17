import { Title, Text } from "../../../../../styles/typography";
import { StyledArticle } from "./style";

export const EmailArticle = () => {
  return (
    <StyledArticle className="email">
      <div className="email__info">
        <div className="email__info-title">
          <Title size={32} weight={400}>
            FIQUE POR DENTRO
          </Title>
          <Text size={16} weight={300}>
            Preencha seus dados e receba mais informações sobre o evento.
          </Text>
        </div>
        <Text size={16} weight={500}>
          Cadastre-se na nossa newsletter ao lado
        </Text>
      </div>
      <div className="email__aside">
        <fieldset className="email__aside-fieldset">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome Completo"
            className="email__aside-input"
          />
        </fieldset>
        <fieldset className="email__aside-fieldset">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Endereço de e-mail"
            className="email__aside-input"
          />
        </fieldset>
        <button className="email__aside-button">INSCREVA-SE</button>
      </div>
    </StyledArticle>
  );
};
