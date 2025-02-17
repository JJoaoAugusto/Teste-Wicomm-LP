import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  padding: 32px 0px;

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
`;
