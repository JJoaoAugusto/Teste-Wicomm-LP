import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  width: 100%;
  max-width: 1200px;
  padding: 120px 0px;

  .address {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .address__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    gap: 56px;
    padding: 32px 0px;

    border-bottom: 4px solid var(--white);
  }

  .address__info-title {
  }

  .address__info-subtitle {
    padding-bottom: 16px;
  }

  .address__info-details {
    display: flex;
    flex-direction: column;

    gap: 4px;
  }

  .address__map {
  }
`;
