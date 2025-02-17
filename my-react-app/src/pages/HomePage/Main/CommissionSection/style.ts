import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 64px 0px;
  gap: 64px;

  .commission__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 285px;
    height: 386px;
    gap: 32px;

    border: 1px solid var(--blue-congresso-light);
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

  .commission-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 16px;
  }

  .commission__card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-bottom: 8px;
    border-bottom: 1px solid var(--blue-congresso-light);
  }

  .commission__card-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .commission__card-link {
    text-decoration: none;

    color: var(--white);
    border-bottom: 1px solid var(--white);

    font-weight: 300px;
    font-size: 14px;
  }
`;
