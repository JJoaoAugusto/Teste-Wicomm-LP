import {
  Bullet,
  Text,
  Title,
  blue,
  white,
} from "../../../../../styles/typography";
import IconBrasil from "../../../../../assets/iconImages/IconBrasil.svg";
import { StyledArticle } from "./style";

export const PlanningArticle = () => {
  return (
    <StyledArticle>
      <div className="calendar__plan-info">
        <div className="calendar__plan-title">
          <Title size={28} weight={500} color={blue}>
            PROGRAMAÇÃO
          </Title>
        </div>
        <fieldset className="calendar__plan-fieldset">
          <label htmlFor="language" className="calendar__plan-label">
            SELECIONE O IDIOMA
          </label>
          <div className="calendar__plan-language">
            <figure>
              <img
                src={IconBrasil}
                alt="Ícone que representa a bandeira do Brasil"
              />
            </figure>
            <select
              name="language"
              id="language"
              className="calendar__plan-select"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
          </div>
        </fieldset>
        <div className="calendar__plan-rules">
          <Text size={16} weight={300}>
            As agendas estão distribuídas por dia, horário e ambientes.
          </Text>
          <Text size={16} weight={300}>
            **Alterações de grade referentes aos speakers e horário podem
            ocorrer sem aviso prévio.
          </Text>
        </div>
      </div>

      <div className="calendar__plan-content">
        <ul className="calendar__plan-list-days">
          <li className="calendar__plan-item-selected">
            <Text size={12} weight={500}>
              BUSINESS CLASS
            </Text>
            <div className="calendar__plan-item-date">
              <Text size={22} weight={500}>
                QUI
              </Text>
              <Bullet height={5} width={5} background={white}></Bullet>
              <Text size={22} weight={500}>
                QUI 10 DE ABRIL
              </Text>
            </div>
          </li>
          <li className="calendar__plan-item">
            <Text size={12} weight={500}>
              CONGRESSO 1 DIA
            </Text>
            <div className="calendar__plan-item-date">
              <Text size={22} weight={300}>
                SEX
              </Text>
              <Bullet height={5} width={5} background={white}></Bullet>
              <Text size={22} weight={500}>
                11 DE ABRIL
              </Text>
            </div>
          </li>
          <li className="calendar__plan-item">
            <Text size={12} weight={500}>
              CONGRESSO 2 DIA
            </Text>
            <div className="calendar__plan-item-date">
              <Text size={22} weight={300}>
                SÁB
              </Text>{" "}
              <Bullet height={5} width={5} background={white}></Bullet>
              <Text size={22} weight={500}>
                12 DE ABRIL
              </Text>
            </div>
          </li>
        </ul>

        <div className="calendar__plan-rules-2">
          <Text size={16} weight={500}>
            **No dia 10 haverá uma Business Class voltada a médicos e
            profissionais de saúde que administram clínicas.
          </Text>
          <Text size={16} weight={300}>
            Nos dias 11 e 12 de abril as palestras são abertas ao público,
            escolha suas palestras e garanta seu ingresso no Congresso.
          </Text>
        </div>

        <div className="calendar__plan-about">
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
                  Dados que Transformam: Como a Análise Estratégica Impulsiona
                  os Negócio
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
                  Gestão Estratégica na saúde: Como Planejar o Futuro do Seu
                  Negóci
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
                  Dados que Transformam: Como a Análise Estratégica Impulsiona
                  os Negócios
                </Text>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledArticle>
  );
};
