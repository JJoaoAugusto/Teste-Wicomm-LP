import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  padding: 64px 0px;
  gap: 64px;

  .commission {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 900px;
    gap: 40px;
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

    width: 285px;
    gap: 32px;
    padding: 32px;

    border: 1px solid var(--blue-congresso);
    border-radius: 16px;
  }

  .commission__card-figure {
    width: 132px;
    height: 132px;
  }

  .commission__card-img {
    width: 100%;
    height: 100%;
  }

  .commission__card-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 12px 0px;
    gap: 8px;

    border-bottom: 1px solid var(--blue-congresso);
  }

  .commission__card-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .commission__card-link {
    text-decoration: none;

    color: var(--white);
    border-bottom: 1px solid var(--white);

    font-weight: 300px;
    font-size: 14px;
  }
`;
