import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  gap: 40px;

  .commission__scientific-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 100%;
    max-width: 900px;
  }
`;
