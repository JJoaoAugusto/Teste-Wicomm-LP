import { Text } from "../../../../../../styles/typography";
import { StyledDiv } from "./style";

export const PlanningThursdayDiv = () => {
  return (
    <StyledDiv>
      <div className="calendar__plan-header">
        <Text size={22} weight={500}>
          SALA PRINCIPAL
        </Text>
        <Text size={12} weight={400}>
          Clique para ver a programação da sala principal
        </Text>
      </div>

      <ul className="calendar__plan-list-content">
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              10/04
            </Text>
            <Text size={20} weight={500}>
              ABERTURA
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={16} weight={500}>
              Fabio Iwai e João Pedro Junqueir
            </Text>
            <Text size={16} weight={300}>
              CEO e Diretor Médico, Grupo Huntingto
            </Text>
          </div>
        </li>
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              10/04
            </Text>
            <Text size={20} weight={500}>
              AULA 01
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={16} weight={500}>
              Inovação e Exclusividade: Redefinindo a Jornada do Pacient
            </Text>
            <Text size={16} weight={300}>
              Claudia Cohn - Diretora de Negócios Nacionais, Das
            </Text>
          </div>
        </li>
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              10/04
            </Text>
            <Text size={20} weight={500}>
              AULA 02
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={16} weight={500}>
              Marketing Digital de Alta Performance para Negócios de Saúd
            </Text>
            <Text size={16} weight={300}>
              Gustavo Santana e Dib Naim Sekkar, Sócios Diretores da Wigo
            </Text>
          </div>
        </li>
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              10/04
            </Text>
            <Text size={20} weight={500}>
              AULA 03
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={16} weight={500}>
              Dados que Transformam: Como a Análise Estratégica Impulsiona os
              Negócio
            </Text>
            <Text size={16} weight={300}>
              Daniel Marques - Data & Analytics Director; Natur
            </Text>
          </div>
        </li>
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              10/04
            </Text>
            <Text size={20} weight={500}>
              AULA 04
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={16} weight={500}>
              Gestão Estratégica na saúde: Como Planejar o Futuro do Seu Negóci
            </Text>
            <Text size={16} weight={300}>
              Riplan-cardo Salem Ribeiro - Diretor Executivo, Care Plus
            </Text>
          </div>
        </li>
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              10/04
            </Text>
            <Text size={20} weight={500}>
              AULA 05
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={16} weight={500}>
              Além do Consultório: Por que o Médico do Futuro Também Precisa
              Pensar como Empresári
            </Text>
            <Text size={16} weight={300}>
              Riplan-cardo Salem Ribeiro - Diretor Executivo, Care Plu
            </Text>
          </div>
        </li>
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              10/04
            </Text>
            <Text size={20} weight={500}>
              ENCERRAMENTO
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={16} weight={500}>
              Fabio Iwai e João Pedro Junqueir
            </Text>
            <Text size={16} weight={300}>
              Dados que Transformam: Como a Análise Estratégica Impulsiona os
              Negócios
            </Text>
          </div>
        </li>
      </ul>
    </StyledDiv>
  );
};
