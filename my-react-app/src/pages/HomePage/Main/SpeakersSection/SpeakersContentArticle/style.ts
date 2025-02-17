import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 100%;
  padding: 64px 0px;
  gap: 64px;

  background-color: var(--blue-congresso-mid);

  .speakers__content-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 12px;
  }

  .speakers__content-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 16px;
  }

  .speakers__content-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    height: 265px;
    padding: 16px;
    gap: 8px;

    border: var(--white) 0.75px solid;
    border-radius: 12px;
    background: linear-gradient(
      to bottom,
      rgba(11, 240, 202, 0.3),
      rgba(176, 78, 225, 0.3)
    );
  }

  .speaker__content-figure {
    position: relative;
  }

  .nacionality__icon {
    position: absolute;
    top: 0;
    left: 0;
  }

  .item__subtext-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    width: 100%;
    gap: 8px;
  }

  .speakers__content-button {
    width: 205px;
    height: 45px;

    border: none;
    font-weight: bold;
    background-color: var(--blue-congresso-light);
    color: var(--white);

    cursor: pointer;
  }
`;
