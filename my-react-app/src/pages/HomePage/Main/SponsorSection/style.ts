import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 64px;

  .sponsors {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 32px;
  }

  .sponsors__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;

    width: 100%;
    gap: 32px;
  }

  .sponsors__title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding-bottom: 16px;

    position: relative;
  }

  .sponsors__title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; /* Espessura da borda */
    background: linear-gradient(
      to right,
      rgba(219, 198, 69, 0.5),
      /* #DBC645 com 50% de opacidade */ rgba(68, 169, 235, 0.5),
      /* #44A9EB com 50% de opacidade */ rgba(131, 67, 199, 0.5),
      /* #8343C7 com 50% de opacidade */ rgba(68, 169, 235, 0.5),
      /* #44A9EB com 50% de opacidade */ rgba(219, 198, 69, 0.5)
        /* #DBC645 com 50% de opacidade */
    );
  }

  .sponsors__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 64px;
  }

  .sponsors__list-figure {
    max-width: 235px;
  }

  .sponsors__list-img {
    max-width: 100%;
  }
`;
