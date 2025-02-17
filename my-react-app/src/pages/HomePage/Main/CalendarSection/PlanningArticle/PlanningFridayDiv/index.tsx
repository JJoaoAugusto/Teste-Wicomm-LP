import { Text } from "../../../../../../styles/typography";
import { StyledDiv } from "./style";

export const PlanningFridayDiv = () => {
  return (
    <StyledDiv>
      <div className="calendar__plan-header-container">
        <div className="calendar__plan-header">
          <Text size={22} weight={500}>
            SALA PRINCIPAL
          </Text>
          <Text size={12} weight={400}>
            Clique para ver a programação da Sala Principal
          </Text>
        </div>
        <div className="calendar__plan-header">
          <Text size={22} weight={500}>
            SALA LABORATÓRIO
          </Text>
          <Text size={12} weight={400}>
            Clique para ver a programação da Sala Laboratório
          </Text>
        </div>
      </div>

      <div className="calendar__plan-list-header">
        <Text size={20} weight={400}>
          Sessão Abertura Oficial
        </Text>
      </div>

      <ul className="calendar__plan-list-content">
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              11/04
            </Text>
            <Text size={20} weight={500}>
              ABERTURA
            </Text>
            <Text size={16} weight={300}>
              08h30 - 09h
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <div>
              <Text size={16} weight={500}>
                Fabio Iwai e João Pedro Junqueir
              </Text>
              <Text size={16} weight={300}>
                CEO e Diretor Médico, Grupo Huntingto
              </Text>
            </div>
            <div>
              <Text size={16} weight={500}>
                Fabio Iwai e João Pedro Junqueir
              </Text>
              <Text size={16} weight={300}>
                CEO e Diretor Médico, Grupo Huntingto
              </Text>
            </div>
          </div>
        </li>
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              11/04
            </Text>
            <Text size={20} weight={500}>
              AULA 01
            </Text>
            <Text size={16} weight={300}>
              09h - 09h:20
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
              11/04
            </Text>
            <Text size={20} weight={500}>
              AULA 02
            </Text>
            <Text size={16} weight={300}>
              09h:20 - 09h:40
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
              11/04
            </Text>
            <Text size={20} weight={500}>
              AULA 03
            </Text>
            <Text size={16} weight={300}>
              09h:40 - 10h
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
              10h - 10h20
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={20} weight={500}>
              DISCUSSÃO
            </Text>
          </div>
        </li>
        <li className="calendar__plan-card">
          <div className="calendar__plan-card-date">
            <Text size={16} weight={300}>
              10h20 - 10h50
            </Text>
          </div>
          <div className="calendar__plan-card-content">
            <Text size={20} weight={500}>
              INTERVALO
            </Text>
          </div>
        </li>
      </ul>
    </StyledDiv>
  );
};
