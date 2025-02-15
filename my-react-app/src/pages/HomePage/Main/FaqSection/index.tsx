import { StyledSection } from "./style";

export const FaqSection = () => {
  return (
    <StyledSection>
      <article className="container-FAQ">
        <p>PERGUNTAS FREQUENTES</p>
        <ul className="container-FAQ--list">
          <li className="FAQ-list--card">
            <div className="card--content">
              <p>
                A inscrição para participação da Sala Business também é válida
                para o congresso?
              </p>
              <p>
                Não, para participar do congresso nos dias 11 e 12, é necessário
                realizar outra inscrição para estas datas.
              </p>
            </div>
            <button>-</button>
          </li>
          <li className="FAQ-list--card">
            <div className="card--content">
              <p>A inscrição é válida para os dois dias de congresso?</p>
            </div>
            <button>+</button>
          </li>
          <li className="FAQ-list--card">
            <div className="card--content">
              <p>Posso parcelar o valor da inscrição?</p>
            </div>
            <button>+</button>
          </li>
          <li className="FAQ-list--card">
            <div className="card--content">
              <p>Qual a política de cancelamento/reembolso?</p>
            </div>
            <button>+</button>
          </li>
        </ul>
      </article>
    </StyledSection>
  );
};
