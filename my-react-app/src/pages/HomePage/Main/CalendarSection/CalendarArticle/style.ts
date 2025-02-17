import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1300px;

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

    z-index: -1;
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
  }
`;
