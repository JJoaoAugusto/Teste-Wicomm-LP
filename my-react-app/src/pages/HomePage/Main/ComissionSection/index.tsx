import { StyledSection } from "./style";

export const ComissionSection = () => {
  return (
    <StyledSection>
      <article className="commission">
        <p className="commission__title">COMISSÃO ORGANIZADORA</p>
        <ul className="commission__organizing-list">
          <li className="commission__card">
            <img src="" alt="" />
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
            <img src="" alt="" />
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
        <p className="commission__title">COMISSÃO CIENTÍFICA</p>
        <ul className="commission__scientific-list">
          {Array.from({ length: 9 }).map((_, index) => (
            <li key={index} className="commission__card">
              <img src="" alt="" />
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
