import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

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

    width: 400px;
    gap: 16px;
  }

  .address__info-title {
  }

  .address__info-subtitle {
  }

  .address__info-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .address__map {
  }
`;
