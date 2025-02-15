import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .container-banner {
    width: 100%;

    display: flex;
    justify-content: start;
    align-items: center;
  }

  .container-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;

    width: 100%;
    max-width: 315px;
    gap: 32px;
  }

  .container-content-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  .container-content--info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    width: 100%;
    max-width: 315px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
    }
  }
`;
