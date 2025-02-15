import styled from "styled-components";

export const StyledSection = styled.section`
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

  .container-plan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 32px;
  }

  .container-plan--info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 32px;
  }

  .container-plan--list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    gap: 32px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100%;
      max-width: 312px;
    }
  }

  .container-plan--about {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    width: 100%;
  }

  .container-plan--content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    padding: 16px;
    gap: 32px;
  }

  .content-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;

    background-color: white;
  }

  .container-content-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    width: 100%;
    gap: 16px;
  }

  .content-list-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    gap: 128px;
  }

  .card-date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 80px;
    gap: 8px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    gap: 12px;
  }
`;
