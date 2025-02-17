import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 86px;
  padding-bottom: 120px;

  .sponsors {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    gap: 32px;
  }

  .sponsors__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;

    width: 100%;
    max-width: 1200px;
    height: 178px;
    gap: 32px;
  }

  .sponsors__title {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding-bottom: 16px;
  }

  .sponsors__title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(219, 198, 69, 1),
      rgba(68, 169, 235, 1),
      rgba(131, 67, 199, 1),
      rgba(68, 169, 235, 1),
      rgba(219, 198, 69, 1)
    );
  }

  .sponsors__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 85px;
    gap: 64px;
  }

  .sponsors__list-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .sponsors__list-figure {
    max-width: 235px;
  }

  .sponsors__list-img {
    max-width: 100%;
  }
`;
