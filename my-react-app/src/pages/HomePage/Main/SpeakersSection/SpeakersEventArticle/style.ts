import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 96px 0px;
  gap: 60px;

  background-color: var(--blue-dark);

  .speakers__event-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    gap: 60px;
  }

  .speakers__event-about {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    width: 100%;
    max-width: 520px;
    gap: 60px;
  }

  .speakers__event-info {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 100px;
    gap: 40px;
  }

  .speakers__event-info-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    padding: 16px;
    border-left: 0.75px solid var(--white);
  }
`;
