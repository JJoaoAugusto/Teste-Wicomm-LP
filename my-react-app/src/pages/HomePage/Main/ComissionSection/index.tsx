import { StyledSection } from "./style";
import MauricioChehin from "../../../../assets/MauricioChehin.svg";
import Alinelorenzon from "../../../../assets/Alinelorenzon.svg";
import Eduardoleme2 from "../../../../assets/EduardoLeme2.svg";

export const ComissionSection = () => {
  return (
    <StyledSection>
      <article className="commission">
        <p className="commission__title title__4">COMISSÃO ORGANIZADORA</p>
        <ul className="commission__organizing-list">
          <li className="commission__card">
            <figure className="commission__card-figure">
              <img
                src={MauricioChehin}
                alt="Foto de perfil do Mauricio Chehin"
                className="commission__card-img"
              />
            </figure>
            <div className="commission__card-info">
              <p>Mauricio Chehin</p>
              <p>CRM/SP 58.345</p>
            </div>
            <div className="commission__card-details">
              <p>Fundador da Huntington</p>
              <p>Medicina Reprodutiva</p>
            </div>
            <a href="" className="commission__card-link">
              VER BIO
            </a>
          </li>
          <li className="commission__card">
            <figure className="commission__card-figure">
              <img
                src={Alinelorenzon}
                alt="Foto de perfil da Aline lorenzon"
                className="commission__card-img"
              />
            </figure>
            <div className="commission__card-info">
              <p>Aline Lorenzon</p>
              <p>CRM/SP 58.345</p>
            </div>
            <div className="commission__card-details">
              <p>Fundador da Huntington</p>
              <p>Medicina Reprodutiva</p>
            </div>
            <a href="" className="commission__card-link">
              VER BIO
            </a>
          </li>
        </ul>
      </article>

      <article className="commission">
        <p className="commission__title title__4">COMISSÃO CIENTÍFICA</p>
        <ul className="commission__scientific-list">
          {Array.from({ length: 9 }).map((_, index) => (
            <li key={index} className="commission__card">
              <figure className="commission__card-figure">
                <img
                  src={Eduardoleme2}
                  alt="Foto de perfil do Eduardo leme Alves da Mota"
                  className="commission__card-img"
                />
              </figure>
              <div className="commission__card-info">
                <p>Eduardo Leme Alves da Mota</p>
                <p>CRM/SP 58.993</p>
              </div>
              <div className="commission__card-details">
                <p>Fundador da Huntington</p>
                <p>Medicina Reprodutiva</p>
              </div>
              <a href="" className="commission__card-link">
                VER BIO
              </a>
            </li>
          ))}
        </ul>
      </article>
    </StyledSection>
  );
};
