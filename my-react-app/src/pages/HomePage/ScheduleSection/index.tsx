import BannerFullDeskCongresso from "../../../assets/BannerFullDeskCongresso.svg";
import { Section } from "./style";

export const ScheduleSection = () => {
  return (
    <Section>
      <article className="container-content">
        <figure className="container-content--banner">
          <img src={BannerFullDeskCongresso} alt="" />
        </figure>
        <div className="container-content--info">
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
    </Section>
  );
};
