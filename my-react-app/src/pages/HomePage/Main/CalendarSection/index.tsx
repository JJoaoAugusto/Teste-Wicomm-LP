import { StyledSection } from "./style";
import { Span, Text, Title, black, blue } from "../../../../styles/typography";
import BannerFullDeskCongresso from "../../../../assets/logoImages/BannerFullDeskCongresso.svg";
import BrasilICON from "../../../../assets/iconImages/BrasilICON.svg";

export const CalendarSection = () => {
  return (
    <StyledSection>
      <article
        className="calendar"
        style={{
          backgroundImage: `url(${BannerFullDeskCongresso})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="calendar__info">
          <div className="calendar__info-box">
            <Title size={28} weight={400}>
              QUANDO?
            </Title>
            <Text size={18} weight={300}>
              O{" "}
              <Span size={18} weight={500}>
                Congresso Huntington
              </Span>{" "}
              acontece nos dias{" "}
              <Span size={18} weight={500}>
                11 e 12 de abril de 2025.
              </Span>{" "}
              No dia 10, acontece a novidade desta edição: a Business Class,
              "inovação e valor para gestores de saúde".
            </Text>
          </div>
          <div className="calendar__info-box">
            <Title size={28} weight={400}>
              ONDE?
            </Title>
            <Text size={18} weight={400}>
              No hotel Tivoli Mofarrej, especialistas de vários países trazem os
              avanços, as novidades e o futuro da reprodução assistida.
            </Text>
          </div>
          <div className="calendar__info-box">
            <button className="calendar__info-button">VEJA COMO CHEGAR</button>
          </div>
        </div>
      </article>

      <article className="calendar__timer">
        <ul className="calendar__timer-list">
          <li className="calendar__timer-item">
            <Title size={40} weight={500} color={black}>
              245
            </Title>
            <Text size={20} weight={300} color={black}>
              DIAS
            </Text>
          </li>
          <span className="bullet"></span>
          <li className="calendar__timer-item">
            <Title size={40} weight={500} color={black}>
              00
            </Title>
            <Text size={20} weight={300} color={black}>
              HORAS
            </Text>
          </li>
          <span className="bullet"></span>
          <li className="calendar__timer-item">
            <Title size={40} weight={500} color={black}>
              25
            </Title>
            <Text size={20} weight={300} color={black}>
              MIN
            </Text>
          </li>
          <span className="bullet"></span>
          <li className="calendar__timer-item">
            <Title size={40} weight={500} color={black}>
              05
            </Title>
            <Text size={20} weight={300} color={black}>
              SEG
            </Text>
          </li>
        </ul>
      </article>

      <article className="calendar__plan">
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
                  src={BrasilICON}
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
              <Text size={22} weight={500}>
                QUI 10 DE ABRIL
              </Text>
            </li>
            <li className="calendar__plan-item">
              <Text size={12} weight={500}>
                CONGRESSO 1 DIA
              </Text>
              <Text size={22} weight={500}>
                {" "}
                <Span size={22} weight={300}>
                  SEX
                </Span>{" "}
                11 DE ABRIL
              </Text>
            </li>
            <li className="calendar__plan-item">
              <Text size={12} weight={500}>
                CONGRESSO 2 DIA
              </Text>
              <Text size={22} weight={500}>
                <Span size={22} weight={300}>
                  SÁB
                </Span>{" "}
                12 DE ABRIL
              </Text>
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
                    Além do Consultório: Por que o Médico do Futuro Também
                    Precisa Pensar como Empresári
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
      </article>
    </StyledSection>
  );
};
