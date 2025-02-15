import { StyledSection } from "./style";

export const FaqSection = () => {
  return (
    <StyledSection>
      <article className="faq">
        <p className="faq__title">PERGUNTAS FREQUENTES</p>
        <ul className="faq__list">
          <li className="faq__card">
            <div className="faq__card-content">
              <p className="faq__card-question">
                A inscrição para participação da Sala Business também é válida
                para o congresso?
              </p>
              <p className="faq__card-answer">
                Não, para participar do congresso nos dias 11 e 12, é necessário
                realizar outra inscrição para estas datas.
              </p>
            </div>
            <button className="faq__card-button">-</button>
          </li>
          <li className="faq__card">
            <div className="faq__card-content">
              <p className="faq__card-question">
                A inscrição é válida para os dois dias de congresso?
              </p>
            </div>
            <button className="faq__card-button">+</button>
          </li>
          <li className="faq__card">
            <div className="faq__card-content">
              <p className="faq__card-question">
                Posso parcelar o valor da inscrição?
              </p>
            </div>
            <button className="faq__card-button">+</button>
          </li>
          <li className="faq__card">
            <div className="faq__card-content">
              <p className="faq__card-question">
                Qual a política de cancelamento/reembolso?
              </p>
            </div>
            <button className="faq__card-button">+</button>
          </li>
        </ul>
      </article>
    </StyledSection>
  );
};
