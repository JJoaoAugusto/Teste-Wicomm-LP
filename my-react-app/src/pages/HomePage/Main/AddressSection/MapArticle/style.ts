import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .map__info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    gap: 56px;
    padding: 32px 0px;
  }

  .map__info::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to right,
      rgba(219, 198, 69, 1),
      rgba(68, 169, 235, 1),
      rgba(131, 67, 199, 1),
      rgba(55, 30, 188, 1),
      rgba(19, 7, 105, 1)
    );
  }

  .map__info-subtitle {
    padding-bottom: 16px;
  }

  .map__info-details {
    display: flex;
    flex-direction: column;

    gap: 4px;
  }
`;
