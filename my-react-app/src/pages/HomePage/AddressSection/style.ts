import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .container-address {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .container-address--info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 400px;
    gap: 16px;
  }
`;
