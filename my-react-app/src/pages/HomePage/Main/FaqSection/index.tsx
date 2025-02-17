import { StyledSection } from "./style";
import lessICON from "../../../../assets/iconImages/lessICON.svg";
import MoreBigICON from "../../../../assets/iconImages/MoreBigICON.svg";
import { Text, Title } from "../../../../styles/typography";

export const FaqSection = () => {
  return (
    <StyledSection>
      <article className="faq">
        <Title size={32} weight={400}>
          PERGUNTAS FREQUENTES
        </Title>
        <ul className="faq__list">
          <li className="faq__card-selected">
            <div className="faq__card-content">
              <Text size={16} weight={400}>
                A inscrição para participação da Sala Business também é válida
                para o congresso?
              </Text>
              <Text size={12} weight={300}>
                Não, para participar do congresso nos dias 11 e 12, é necessário
                realizar outra inscrição para estas datas.
              </Text>
            </div>
            <button className="faq__card-button">
              <img
                src={lessICON}
                alt="Ícone que representa o símbolo de subtração"
              />
            </button>
          </li>
          <li className="faq__card">
            <div className="faq__card-content">
              <Text size={16} weight={300}>
                A inscrição é válida para os dois dias de congresso?
              </Text>
            </div>
            <button className="faq__card-button">
              <img
                src={MoreBigICON}
                alt="Ícone que representa o símbolo de adição"
              />
            </button>
          </li>
          <li className="faq__card">
            <div className="faq__card-content">
              <Text size={16} weight={300}>
                Posso parcelar o valor da inscrição?
              </Text>
            </div>
            <button className="faq__card-button">
              <img
                src={MoreBigICON}
                alt="Ícone que representa o símbolo de adição"
              />
            </button>
          </li>
          <li className="faq__card">
            <div className="faq__card-content">
              <Text size={16} weight={300}>
                Qual a política de cancelamento/reembolso?
              </Text>
            </div>
            <button className="faq__card-button">
              <img
                src={MoreBigICON}
                alt="Ícone que representa o símbolo de adição"
              />
            </button>
          </li>
        </ul>
      </article>
    </StyledSection>
  );
};
