import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 64px;

  .sponsors__realization {
  }

  .sponsors__sponsor {
  }

  .sponsors__bronze {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 64px;
  }

  .sponsors__gold-silver {
  }

  .sponsors__institutional-media {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .sponsors__bronze-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .sponsors__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 64px;
  }

  .sponsors__title {
    font-weight: bold;
  }

  .sponsors__logo,
  .sponsors__list figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
