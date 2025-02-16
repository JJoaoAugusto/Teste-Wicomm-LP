import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;

  width: 100%;
  max-width: 1200px;
  height: 650px;

  .about__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    width: 100%;
    gap: 32px;
  }

  .about__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    padding-top: 56px;
  }

  .about__header-text {
  }

  .about__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    width: 100%;
    max-width: 290px;
    gap: 32px;
    padding-top: 72px;
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
    text-align: justify;
    align-self: stretch;
  }

  .about__button {
    width: 100%;
    height: 45px;

    background-color: var(--blue-light);
    color: var(--white);

    border: none;
    font-weight: bold;

    cursor: pointer;
  }
`;
