import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .email__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    gap: 32px;
  }

  .email__info-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    gap: 8px;
  }

  .email__aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 450px;
    gap: 8px;
  }

  .email__aside-fieldset {
    width: 100%;
    padding: 12px;

    border: 1px solid var(--white);
    border-radius: 8px;
  }

  .email__aside-input::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: var(--white);
    opacity: 0.8;
  }

  .email__aside-button {
    width: 100%;
    height: 45px;

    background-color: var(--white);
    border: none;

    font-size: 12px;
    font-weight: 600;
    color: var(--blue-congresso);

    cursor: pointer;
  }
`;
