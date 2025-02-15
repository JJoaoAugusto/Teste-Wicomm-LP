import BannerFullDeskCongresso from "../../../../assets/BannerFullDeskCongresso.svg";
import { StyledSection } from "./style";

export const ScheduleSection = () => {
  return (
    <StyledSection>
      <article className="schedule">
        <figure className="schedule__banner">
          <img src={BannerFullDeskCongresso} alt="Banner do Congresso" />
        </figure>
        <div className="schedule__info">
          <div className="schedule__info-box">
            <p className="schedule__info-title">QUANDO?</p>
            <p className="schedule__info-text">
              O Congresso Huntington acontece nos dias 11 e 12 de abril de 2025.
              No dia 10, acontece a novidade desta edição: a Business Class,
              "inovação e valor para gestores de saúde".
            </p>
          </div>
          <div className="schedule__info-box">
            <p className="schedule__info-title">ONDE?</p>
            <p className="schedule__info-text">
              No hotel Tivoli Mofarrej, especialistas de vários países trazem os
              avanços, as novidades e o futuro da reprodução assistida.
            </p>
          </div>
          <button className="schedule__info-button">VEJA COMO CHEGAR</button>
        </div>
      </article>

      <article className="schedule__timer">
        <ul className="schedule__timer-list">
          <li className="schedule__timer-item">245 DIAS</li>
          <li className="schedule__timer-item">00 HORAS</li>
          <li className="schedule__timer-item">25 MIN</li>
          <li className="schedule__timer-item">05 SEG</li>
        </ul>
      </article>

      <article className="schedule__plan">
        <div className="schedule__plan-info">
          <p className="schedule__plan-title">PROGRAMAÇÃO</p>
          <fieldset className="schedule__plan-language">
            <select
              name="language"
              id="language"
              className="schedule__plan-select"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
          </fieldset>
          <p className="schedule__plan-text">
            As agendas estão distribuídas por dia, horário e ambientes.
          </p>
          <p className="schedule__plan-text">
            **Alterações de grade referentes aos speakers e horário podem
            ocorrer sem aviso prévio.
          </p>
        </div>
        <ul className="schedule__plan-list">
          <li className="schedule__plan-item">
            <p className="schedule__plan-item-title">BUSINESS CLASS</p>
            <p className="schedule__plan-item-date">QUI 10 DE ABRIL</p>
          </li>
          <li className="schedule__plan-item">
            <p className="schedule__plan-item-title">CONGRESSO 1 DIA</p>
            <p className="schedule__plan-item-date">SEX 11 DE ABRIL</p>
          </li>
          <li className="schedule__plan-item">
            <p className="schedule__plan-item-title">CONGRESSO 2 DIA</p>
            <p className="schedule__plan-item-date">SÁB 12 DE ABRIL</p>
          </li>
        </ul>
        <div className="schedule__plan-about">
          <p className="schedule__plan-about-text">
            **No dia 10 haverá uma Business Class voltada a médicos e
            profissionais de saúde que administram clínicas.
          </p>
          <p className="schedule__plan-about-text">
            Nos dias 11 e 12 de abril as palestras são abertas ao público,
            escolha suas palestras e garanta seu ingresso no Congresso.
          </p>
        </div>
        <div className="schedule__plan-content">
          <div className="schedule__content-title">
            <p className="schedule__content-title-text">SALA PRINCIPAL</p>
            <p className="schedule__content-title-subtext">
              Clique para ver a programação da sala principal
            </p>
          </div>
          <ul className="schedule__content-list">
            <li className="schedule__content-card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day">10/04</p>
                <p className="schedule__card-date-event">ABERTURA</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker">
                  Fabio Iwai e João Pedro Junqueira
                </p>
                <p className="schedule__card-content-role">
                  CEO e Diretor Médico, Grupo Huntington
                </p>
              </div>
            </li>
            <li className="schedule__content-card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day">10/04</p>
                <p className="schedule__card-date-event">AULA 01</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker">Claudia Cohn</p>
                <p className="schedule__card-content-role">
                  Diretora de Negócios Nacionais, Dasa
                </p>
              </div>
            </li>
            <li className="schedule__content-card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day">10/04</p>
                <p className="schedule__card-date-event">AULA 02</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker">
                  Gustavo Santana e Dib Naim Sekkar
                </p>
                <p className="schedule__card-content-role">
                  Sócios Diretores da Wigoo
                </p>
              </div>
            </li>
            <li className="schedule__content-card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day">10/04</p>
                <p className="schedule__card-date-event">AULA 03</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker">Daniel Marques</p>
                <p className="schedule__card-content-role">
                  Data & Analytics Director, Natura
                </p>
              </div>
            </li>
            <li className="schedule__content-card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day">10/04</p>
                <p className="schedule__card-date-event">AULA 04</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker">
                  Luís Fernando Vieira Joaquim
                </p>
                <p className="schedule__card-content-role">Sócio, Deloitte</p>
              </div>
            </li>
            <li className="schedule__content-card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day">10/04</p>
                <p className="schedule__card-date-event">AULA 05</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker">
                  Ricardo Salem Ribeiro
                </p>
                <p className="schedule__card-content-role">
                  Diretor Executivo, Care Plus
                </p>
              </div>
            </li>
            <li className="schedule__content-card">
              <div className="schedule__card-date">
                <p className="schedule__card-date-day">10/04</p>
                <p className="schedule__card-date-event">ENCERRAMENTO</p>
              </div>
              <div className="schedule__card-content">
                <p className="schedule__card-content-speaker">
                  Fabio Iwai e João Pedro Junqueira
                </p>
                <p className="schedule__card-content-role">
                  CEO e Diretor Médico, Grupo Huntington
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </StyledSection>
  );
};
