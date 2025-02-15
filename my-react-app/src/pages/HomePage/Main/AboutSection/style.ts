import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .about__banner {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  .about__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;

    width: 100%;
    max-width: 315px;
    gap: 32px;
  }

  .about__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  .about__header-text {
  }

  .about__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    width: 100%;
    max-width: 315px;
  }

  .about__info-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  .about__info-text {
  }

  .about__description {
    font-weight: bold;
    text-align: right;
  }

  .about__button {
    width: 160px;
    height: 45px;
    background-color: var(--blue-mid);
    color: var(--white);
    border: none;
    cursor: pointer;
  }
`;
