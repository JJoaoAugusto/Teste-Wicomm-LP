import { StyledSection } from "./style";

export const EmailSection = () => {
  return (
    <StyledSection>
      <article className="email">
        <div className="email__info">
          <div className="email__info-title">
            <h1 className="title__3">FIQUE POR DENTRO</h1>
            <p className="text__3">
              Preencha seus dados e receba mais informações sobre o evento.
            </p>
          </div>
          <p className="text__3">Cadastre-se na nossa newsletter ao lado</p>
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
      </article>
    </StyledSection>
  );
};
