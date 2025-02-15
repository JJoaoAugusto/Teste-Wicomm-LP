import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .commission {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .commission__title {
  }

  .commission__organizing-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 16px;
  }

  .commission__scientific-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 100%;
  }

  .commission__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    width: 100%;
  }

  .commission__card-info,
  .commission__card-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .commission__card-link {
  }
`;
