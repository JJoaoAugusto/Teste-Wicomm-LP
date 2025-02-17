import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  width: 100%;
  max-width: 1200px;
  height: 650px;
  gap: 32px;

  .about__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    padding-top: 56px;
  }

  .about__header-title {
    font-size: 40px;
    font-weight: 300;
    color: var(--white);
  }

  .about__header-subtitle {
    font-size: 36px;
    font-weight: 300;
    color: var(--blue-congresso-light);
  }

  .about__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    width: 100%;
    max-width: 300px;
    gap: 32px;
    padding-top: 72px;
  }

  .about__info-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  .about__info-title {
    font-size: 32px;
    font-weight: 300;
    color: var(--white);
  }

  .about__info-subtitle {
    font-size: 28px;
    font-weight: 300;
    color: var(--blue-congresso-light);
  }

  .about__info-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  .about__info-text {
    font-size: 18px;
    font-weight: 700;
  }

  .about__info-subtext {
    font-size: 16px;
    font-weight: 300;
    width: fit-content;
  }

  .about__button {
    width: 100%;
    height: 45px;

    background-color: var(--purple);
    color: var(--white);

    border: none;
    font-weight: bold;

    cursor: pointer;
  }
`;
