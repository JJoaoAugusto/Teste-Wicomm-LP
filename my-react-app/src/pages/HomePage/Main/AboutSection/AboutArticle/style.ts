import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  height: 650px;
  gap: 32px;

  .about__header {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    padding-top: 50px;
    height: 100%;
    width: 100%;
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

  .about__aside {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;

    width: 100%;
    max-width: 300px;
    height: 100%;
    gap: 32px;
    padding-top: 72px;
  }

  .about__aside-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  .about__aside-title {
    font-size: 32px;
    font-weight: 300;
    color: var(--white);
  }

  .about__aside-subtitle {
    font-size: 28px;
    font-weight: 300;
    color: var(--blue-congresso-light);
  }

  .about__aside-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  .about__aside-text {
    font-size: 18px;
    font-weight: 700;
  }

  .about__aside-subtext {
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
