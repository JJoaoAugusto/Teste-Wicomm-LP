import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 900px;
  gap: 40px;

  .faq__title {
  }

  .faq__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 16px;
  }

  .faq__card-selected {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100px;
    padding: 32px;

    background-color: rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid var(--white);
  }

  .faq__card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100px;
    padding: 32px;

    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .faq__card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .faq__card-button {
    color: white;
  }
`;
