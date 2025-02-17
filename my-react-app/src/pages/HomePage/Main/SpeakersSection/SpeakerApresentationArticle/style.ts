import styled from "styled-components";

export const StyledArticle = styled.article`
  .speakers__apresentation-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding-bottom: 24px;
    position: relative;
  }

  .speakers__apresentation-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 750px;
    height: 5px;

    background: linear-gradient(
      to right,
      #dbc645,
      #44a9eb,
      #8343c7,
      #371ebc,
      #130769
    );
  }

  .speakers__apresentation-vignette {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 900px;
    height: 500px;
    margin-top: 40px;

    background-color: var(--white);
    color: var(--blue-mid);
  }

  .vignet__content {
    font-size: 54px;
    font-weight: 300;

    background: linear-gradient(
      to right,
      #dbc645,
      #44a9eb,
      #8343c7,
      #371ebc,
      #130769
    );

    background-clip: text;
    color: transparent;
  }
`;
