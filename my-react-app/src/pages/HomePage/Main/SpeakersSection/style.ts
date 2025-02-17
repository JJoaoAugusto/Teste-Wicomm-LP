import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-top: 40px;
  gap: 40px;

  .speakers__apresentation-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding-bottom: 24px;
    position: relative;
  }

  .bullet {
    width: 10px;
    height: 10px;
    border-radius: 25px;
    background-color: var(--white);
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

  .speakers__content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    padding: 64px 0px;
    gap: 64px;

    background-color: var(--blue-congresso-mid);
  }

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

  .speakers__event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 96px 0px;
    gap: 60px;

    background-color: var(--blue-dark);
  }

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

  .speakers__event-images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 550px;
    height: 550px;
    gap: 16px;

    overflow-x: scroll;

    img {
      width: 450px;
      height: 450px;
    }
  }
`;
