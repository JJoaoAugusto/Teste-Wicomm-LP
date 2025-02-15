import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .faq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 64px;
  }

  .faq__title {
  }

  .faq__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 64px;
  }

  .faq__card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .faq__card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    gap: 16px;
  }

  .faq__card-question {
  }

  .faq__card-answer {
  }

  .faq__card-button {
    color: white;
  }
`;
