import BannerFullDeskCongresso from "../../../assets/BannerFullDeskCongresso.svg";
import { Section } from "./style";

export const ScheduleSection = () => {
  return (
    <Section>
      <article className="container-questions">
        <figure className="container-questions--banner">
          <img src={BannerFullDeskCongresso} alt="" />
        </figure>
        <div className="container-questions--info">
          <div className="info-box">
            <p>QUANDO?</p>
            <p>
              O Congresso Huntington acontece nos dias 11 e 12 de abril de 2025.
              No dia 10, acontece a novidade desta edição: a Business Class,
              "inovação e e valor para gestores de saúde".
            </p>
          </div>
          <div>
            <p>ONDE?</p>
            <p>
              No hotel Tivoli Mofarrej, especialistas de varios países trazem os
              avanços, as novidades e o futuro da reprodução assistida.
            </p>
          </div>
          <button>VEJA COMO CHEGAR</button>
        </div>
      </article>
      <article className="container-timer">
        <ul className="container-timer--info">
          <li>245 DIAS</li>
          <li>00 HORAS</li>
          <li>25 MIN</li>
          <li>05 SEG</li>
        </ul>
      </article>
      <article className="container-plan">
        <div className="container-plan--info">
          <p>PROGRAMAÇÃO</p>
          <fieldset>
            <label htmlFor="">SELECIONE O IDIOMA</label>
            <select name="" id="">
              <option value="">PT</option>
              <option value="">EN</option>
            </select>
          </fieldset>
          <p>As agendas estão distribuidas por dia, horário e ambientes.</p>
          <p>
            **Alterações de grade referentes aos speakers e horário podem
            ocorrer sem aviso prévio.
          </p>
        </div>
        <ul className="container-plan--list">
          <li>
            <p>BUSINESS CLASS</p>
            <p>QUI 10 DE ABRIL</p>
          </li>
          <li>
            <p>CONGRESSO 1 DIA</p>
            <p>SEX 11 DE ABRIL</p>
          </li>
          <li>
            <p>CONGRESSO 2 DIA</p>
            <p>SÁB 12 De ABRIL</p>
          </li>
        </ul>
        <div className="container-plan--about">
          <p>
            **No dia 10 haverá uma Business Class voltada a médicos e
            profissionais de saúde que administram clinicas.
          </p>
          <p>
            Nos dias 11 e 12 de abril as palestras são abertas ao público,
            escolha suas palestras e garanta seu ingresso no Congresso.
          </p>
        </div>
        <div className="container-plan--content">
          <div className="content--title">
            <p>SALA PRINCIPAl</p>
            <p>Clique para ver a programação da sala principal</p>
          </div>
          <ul className="container-content-list">
            <li className="content-list-card">
              <div className="card-date">
                <p>10/04</p>
                <p>ABERTURA</p>
              </div>
              <div className="card-content">
                <p>Fabio Iwai e João Pedro Junqueira</p>
                <p>CEO e Diretor Médico, Grupo Huntington</p>
              </div>
            </li>
            <li className="content-list-card">
              <div className="card-date">
                <p>10/04</p>
                <p>AULA 01</p>
              </div>
              <div className="card-content">
                <p>
                  Inovação e Exclusividade: Redefinindo a Jornada do Paciente
                </p>
                <p>Claudia Cohn - Diretora de Negócios Nacionais, Dasa</p>
              </div>
            </li>
            <li className="content-list-card">
              <div className="card-date">
                <p>10/04</p>
                <p>AULA 02</p>
              </div>
              <div className="card-content">
                <p>
                  Marketing Digital de Alta Performance para Negócios de Saúde
                </p>
                <p>
                  Gustavo Santana e Dib Naim Sekkar, Sócios Diretores da Wigoo
                </p>
              </div>
            </li>
            <li className="content-list-card">
              <div className="card-date">
                <p>10/04</p>
                <p>AULA 03</p>
              </div>
              <div className="card-content">
                <p>
                  Dados que Transformam: Como a Análise Estratégica Impulsiona
                  os Negócios
                </p>
                <p>Daniel Marques - Data & Analytics Director; Natura </p>
              </div>
            </li>
            <li className="content-list-card">
              <div className="card-date">
                <p>10/04</p>
                <p>AULA 04</p>
              </div>
              <div className="card-content">
                <p>
                  Gestão Estratégica na saúde: Como Planejar o Futuro do Seu
                  Negócio
                </p>
                <p>Luís Fernando Vieira Joaquim - Sócio, Deloitte</p>
              </div>
            </li>
            <li className="content-list-card">
              <div className="card-date">
                <p>10/04</p>
                <p>AULA 05</p>
              </div>
              <div className="card-content">
                <p>
                  Além do Consultório: Por que o Médico do Futuro Também Precisa
                  Pensar como Empresário
                </p>
                <p>Ricardo Salem Ribeiro - Diretor Executivo, Care Plus</p>
              </div>
            </li>
            <li className="content-list-card">
              <div className="card-date">
                <p>10/04</p>
                <p>ENCERRAMENTO</p>
              </div>
              <div className="card-content">
                <p>Fabio Iwai e João Pedro Junqueira</p>
                <p>
                  Dados que Transformam: Como a Análise Estratégica Impulsiona
                  os Negócios
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </Section>
  );
};
