import { Title, Text } from "../../../../../styles/typography";
import IconLess from "../../../../../assets/iconImages/IconLess.svg";
import IconMoreBig from "../../../../../assets/iconImages/IconMoreBig.svg";
import { StyledArticle } from "./style";

export const FaqContentArticle = () => {
  return (
    <StyledArticle>
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
              src={IconLess}
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
              src={IconMoreBig}
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
              src={IconMoreBig}
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
              src={IconMoreBig}
              alt="Ícone que representa o símbolo de adição"
            />
          </button>
        </li>
      </ul>
    </StyledArticle>
  );
};
