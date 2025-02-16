import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-top: 32px;
  gap: 32px;
  background-color: var(--blue-mid);

  .speakers__apresentation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    padding: 32px 0px;
    gap: 32px;
  }

  .speakers__apresentation-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-bottom: 24px;
    border-bottom: solid 5px;
  }

  .speakers__apresentation-vignette {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 900px;
    height: 500px;

    background-color: var(--white);
    color: var(--blue-mid);
  }

  .speakers__content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    padding: 64px 0px;
    gap: 64px;
  }

  .speakers__content-title {
  }

  .speakers__content-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 16px;

    overflow-x: scroll;
  }

  .speakers__content-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 205px;
    height: 265px;
    gap: 8px;

    background: linear-gradient(
      to bottom,
      rgba(11, 240, 202, 0.3),
      rgba(176, 78, 225, 0.3)
    );

    border: var(--white) 0.75px solid;
    border-radius: 12px;
  }

  .speakers__content-button {
    width: 205px;
    height: 45px;

    background-color: var(--blue-congresso);
    color: var(--white);

    border: none;
    font-weight: bold;

    cursor: pointer;
  }

  .speakers__event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 96px 0px;

    background-color: var(--blue-dark);
  }

  .speakers__event-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
  }

  .speakers__event-about {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    width: 100%;
    max-width: 500px;
    gap: 32px;
  }

  .speakers__event-about-title {
    font-weight: bold;
  }

  .speakers__event-about-description {
    text-align: center;
  }

  .speakers__event-about-stats {
  }

  .speakers__event-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
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
