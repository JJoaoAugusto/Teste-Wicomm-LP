import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .container-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    gap: 16px;
  }

  .container-timer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .container-timer--info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 64px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 140px;
      height: 140px;

      background-color: var(--white);
      color: var(--black);

      border-radius: 100%;
    }
  }
`;
