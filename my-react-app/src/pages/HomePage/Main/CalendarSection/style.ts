import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 56px;
  padding-bottom: 64px;

  /* .calendar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1300px;
  }

  .calendar__banner {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  .calendar__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    width: 100%;
    max-width: 1200px;
    height: 100%;
    gap: 40px;
    padding: 60px;

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(11, 240, 202, 0.2)
    );
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 16px;
  }

  .calendar__info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    gap: 16px;
    width: 100%;
    max-width: 500px;
  }

  .calendar__info-button {
    width: 200px;
    height: 45px;

    background-color: var(--blue-congresso-light);
    color: var(--white);

    border: none;
    font-size: 12px;
    font-weight: 600;

    cursor: pointer;
  } */

  /* ---------- */

  /* .calendar__timer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    padding: 32px 0px;
  }

  .calendar__timer-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 32px;
  }

  .calendar__timer-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 140px;
    height: 140px;

    background-color: var(--gray-light);
    color: var(--black);

    border-radius: 100%;
  }

  .bullet {
    width: 10px;
    height: 10px;
    border-radius: 25px;
    background-color: var(--white);
  } */

  .calendar__plan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 40px;
    padding-bottom: 100px;

    background-color: rgba(5, 12, 72, 0.2);
  }

  .calendar__plan-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    gap: 32px;
  }

  .calendar__plan-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 100%;
    max-width: 350px;
    padding: 18px;
  }

  .calendar__plan-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 5px;

    background: linear-gradient(
      to right,
      #dbc645,
      #44a9eb,
      #8343c7,
      #371ebc,
      #130769
    );
  }

  .calendar__plan-fieldset {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 16px;
    padding: 18px;

    border: 1px solid var(--white);
    border-radius: 100px;
  }

  .calendar__plan-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--white);
  }

  .calendar__plan-language {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .calendar__plan-select {
    background-color: transparent;
    color: var(--white);

    border: none;
    font-size: 12px;
    font-weight: 400;

    cursor: pointer;
  }

  .calendar__plan-rules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .calendar__plan-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    gap: 32px;
  }

  .calendar__plan-list-days {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    gap: 32px;
  }

  .calendar__plan-item-selected {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 16px;

    background: linear-gradient(
      to right,
      rgba(176, 78, 225, 1),
      rgba(1, 175, 217, 1)
    );
    border-radius: 100px;
  }

  .calendar__plan-item {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 16px;

    background: transparent;
    border-radius: 100px;
    z-index: 0;
  }

  .calendar__plan-item::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 100px;
    background: linear-gradient(
      to right,
      rgba(176, 78, 225, 1),
      rgba(1, 175, 217, 1)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    z-index: -1;
  }

  .calendar__plan-rules-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
  }

  .calendar__plan-about {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    padding: 18px 56px 56px 56px;
    gap: 22px;

    background: linear-gradient(
      to bottom,
      rgba(87, 203, 230, 0.1),
      rgba(16, 13, 157, 0.1)
    );

    border-radius: 8px;
  }

  .calendar__plan-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;

    background: linear-gradient(
      to right,
      rgba(176, 78, 225, 1),
      rgba(1, 175, 217, 1)
    );
    border-radius: 8px;
  }

  .calendar__plan-list-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    width: 100%;
    gap: 22px;
  }

  .calendar__plan-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    gap: 128px;
    padding: 40px 32px;

    background-color: rgba(255, 255, 255, 0.05);
  }

  .calendar__plan-card-date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    max-width: 120px;
    gap: 8px;
  }

  .calendar__plan-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    gap: 12px;
  }
`;
