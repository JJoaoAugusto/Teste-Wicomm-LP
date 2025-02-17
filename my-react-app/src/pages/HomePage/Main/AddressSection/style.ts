import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 120px 0px;

  .address {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
  }

  .address__info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    gap: 56px;
    padding: 32px 0px;
  }

  .address__info::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to right,
      rgba(219, 198, 69, 1),
      rgba(68, 169, 235, 1),
      rgba(131, 67, 199, 1),
      rgba(55, 30, 188, 1),
      rgba(19, 7, 105, 1)
    );
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
