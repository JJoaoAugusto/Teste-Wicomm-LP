import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 32px;
  padding: 16px 0px;

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
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 160px;
    gap: 128px;
    padding: 0 32px;

    background-color: rgba(255, 255, 255, 0.05);
  }

  .calendar__plan-card-date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    max-width: 120px;
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
