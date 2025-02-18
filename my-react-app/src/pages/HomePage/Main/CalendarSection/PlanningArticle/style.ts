import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 40px;
  padding-bottom: 100px;

  background-color: rgba(5, 12, 72, 0.2);

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
    cursor: pointer;
  }

  .calendar__plan-item {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 16px;

    border-radius: 100px;
    z-index: 0;
    cursor: pointer;
  }

  .calendar__plan-item:hover {
    background: linear-gradient(
      to right,
      rgba(176, 78, 225, 0.3),
      rgba(1, 175, 217, 0.3)
    );
  }

  .calendar__plan-item-date {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 8px;
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
`;
