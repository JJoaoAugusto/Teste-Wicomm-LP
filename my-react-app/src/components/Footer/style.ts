import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;

  background-color: rgba(0, 2, 37, 0.2);
  color: var(--white);

  .footer__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
  }

  .footer__logo img {
    height: 45px;
    width: auto;
  }

  .footer__contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .footer__rules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .footer__title {
    font-weight: bold;
  }

  .footer__text {
    font-size: 14px;
  }
`;
