import BannerFullDeskCongresso from "../../../../assets/BannerFullDeskCongresso.svg";
import { StyledSection } from "./style";

export const ScheduleSection = () => {
  return (
    <StyledSection>
      <article
        className="schedule"
        style={{
          backgroundImage: `url(${BannerFullDeskCongresso})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="schedule__info">
          <div className="schedule__info-box">
            <h4 className="schedule__info-title title__for">QUANDO?</h4>
            <p className="schedule__info-text text__two">
              O Congresso Huntington acontece nos dias 11 e 12 de abril de 2025.
              No dia 10, acontece a novidade desta edição: a Business Class,
              "inovação e valor para gestores de saúde".
            </p>
          </div>
          <div className="schedule__info-box">
            <p className="schedule__info-title title__for">ONDE?</p>
            <p className="schedule__info-text text__two">
              No hotel Tivoli Mofarrej, especialistas de vários países trazem os
              avanços, as novidades e o futuro da reprodução assistida.
            </p>
          </div>
          <div className="schedule__info-box">
            <button className="schedule__info-button">VEJA COMO CHEGAR</button>
          </div>
        </div>
      </article>

      <article className="schedule__timer">
        <ul className="schedule__timer-list">
          <li className="schedule__timer-item">
            <h1 className="title__one">245</h1>
            <p className="text__one">DIAS</p>
          </li>
          <li className="schedule__timer-item">
            <h1 className="title__one">00</h1>
            <p className="text__one">HORAS</p>
          </li>
          <li className="schedule__timer-item">
            <h1 className="title__one">25</h1>
            <p className="text__one">MIN</p>
          </li>
          <li className="schedule__timer-item">
            <h1 className="title__one">05</h1>
            <p className="text__one">SEG</p>
          </li>
        </ul>
      </article>

      <article className="schedule__plan">
        <div className="schedule__plan-info">
          <div className="schedule__plan-header">
            <h4 className="schedule__plan-title title__for">PROGRAMAÇÃO</h4>
          </div>
          <fieldset className="schedule__plan-language">
            <label
              htmlFor="language"
              className="schedule__plan-label texte__for"
            >
              SELECIONE O IDIOMA
            </label>
            <select
              name="language"
              id="language"
              className="schedule__plan-select"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
          </fieldset>
          <div className="schedule__plan-rules">
            <p className="schedule__plan-text text__tree">
              As agendas estão distribuídas por dia, horário e ambientes.
            </p>
            <p className="schedule__plan-text text__tree">
              **Alterações de grade referentes aos speakers e horário podem
              ocorrer sem aviso prévio.
            </p>
          </div>
        </div>
        <ul className="schedule__plan-list">
          <li className="schedule__plan-item">
            <p className="schedule__plan-item-title text__for">
              BUSINESS CLASS
            </p>
            <p className="schedule__plan-item-date text__one">
              QUI 10 DE ABRIL
            </p>
          </li>
          <li className="schedule__plan-item">
            <p className="schedule__plan-item-title text__for">
              CONGRESSO 1 DIA
            </p>
            <p className="schedule__plan-item-date text__one">
              SEX 11 DE ABRIL
            </p>
          </li>
          <li className="schedule__plan-item">
            <p className="schedule__plan-item-title text__for">
              CONGRESSO 2 DIA
            </p>
            <p className="schedule__plan-item-date text__one">
              SÁB 12 DE ABRIL
            </p>
          </li>
        </ul>
        <div className="schedule__plan-about">
          <p className="schedule__plan-about-text text__tree">
            **No dia 10 haverá uma Business Class voltada a médicos e
            profissionais de saúde que administram clínicas.
          </p>
          <p className="schedule__plan-about-text text__tree">
            Nos dias 11 e 12 de abril as palestras são abertas ao público,
            escolha suas palestras e garanta seu ingresso no Congresso.
          </p>
        </div>
        <div className="schedule__plan-content">
          <div className="schedule__content-header">
            <p className="schedule__content-title text__one">SALA PRINCIPAL</p>
            <p className="schedule__content-text text__for">
              Clique para ver a programação da sala principal
            </p>
          </div>
          <ul className="schedule__content-list">
            <li className="schedule__card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day text__one">10/04</p>
                <p className="schedule__card-date-event text__tree">ABERTURA</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker text__tree">
                  Fabio Iwai e João Pedro Junqueir
                </p>
                <p className="schedule__card-content-role">
                  CEO e Diretor Médico, Grupo Huntingto
                </p>
              </div>
            </li>
            <li className="schedule__card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day text__one">10/04</p>
                <p className="schedule__card-date-event text__tree">AULA 01</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker text__tree">
                  Inovação e Exclusividade: Redefinindo a Jornada do Pacient
                </p>
                <p className="schedule__card-content-role">
                  Claudia Cohn - Diretora de Negócios Nacionais, Das
                </p>
              </div>
            </li>
            <li className="schedule__card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day text__one">10/04</p>
                <p className="schedule__card-date-event text__tree">AULA 02</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker text__tree">
                  Marketing Digital de Alta Performance para Negócios de Saúd
                </p>
                <p className="schedule__card-content-role">
                  Gustavo Santana e Dib Naim Sekkar, Sócios Diretores da Wigo
                </p>
              </div>
            </li>
            <li className="schedule__card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day text__one">10/04</p>
                <p className="schedule__card-date-event text__tree">AULA 03</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker text__tree">
                  Dados que Transformam: Como a Análise Estratégica Impulsiona
                  os Negócio
                </p>
                <p className="schedule__card-content-role">
                  Daniel Marques - Data & Analytics Director; Natur
                </p>
              </div>
            </li>
            <li className="schedule__card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day text__one">10/04</p>
                <p className="schedule__card-date-event text__tree">AULA 04</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker text__tree">
                  Gestão Estratégica na saúde: Como Planejar o Futuro do Seu
                  Negóci
                </p>
                <p className="schedule__card-content-role">
                  Ricardo Salem Ribeiro - Diretor Executivo, Care Plus
                </p>
              </div>
            </li>
            <li className="schedule__card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day text__one">10/04</p>
                <p className="schedule__card-date-event text__tree">AULA 05</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker text__tree">
                  Além do Consultório: Por que o Médico do Futuro Também Precisa
                  Pensar como Empresári
                </p>
                <p className="schedule__card-content-role">
                  Ricardo Salem Ribeiro - Diretor Executivo, Care Plu
                </p>
              </div>
            </li>
            <li className="schedule__card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day text__one">10/04</p>
                <p className="schedule__card-date-event text__tree">
                  ENCERRAMENTO
                </p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker text__tree">
                  Fabio Iwai e João Pedro Junqueir
                </p>
                <p className="schedule__card-content-role">
                  Dados que Transformam: Como a Análise Estratégica Impulsiona
                  os Negócios
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </StyledSection>
  );
};
