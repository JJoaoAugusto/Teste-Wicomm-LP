import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  gap: 32px;

  .article__carousel-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 500px;
  }

  .speakers__event-carousel-list {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    max-width: 450px;
    height: 450px;
    gap: 16px;
  }

  .speakers__event-carousel-item {
    flex: 0 0 auto;
  }

  .speakers__event-carousel-arrow {
    cursor: pointer;
  }

  .speakers__event-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    img {
      width: 450px;
      height: auto;
    }
  }
`;
