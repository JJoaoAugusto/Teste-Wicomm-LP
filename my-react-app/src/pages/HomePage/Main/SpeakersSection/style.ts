import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 32px 0px;
  gap: 32px;
  background-color: var(--blue-mid);

  .speakers__apresentation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    gap: 32px;
    padding: 32px 0px;
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
  }

  .speakers__content-title {
    font-weight: bold;
  }

  .speakers__content-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 16px;
  }

  .speakers__content-item {
    width: 200px;
    height: 264px;

    border: solid black;
  }

  .speakers__content-button {
    margin-top: 16px;
  }

  .speakers__event {
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
    align-items: center;

    width: 100%;
    max-width: 500px;
  }

  .speakers__event-about-title {
    font-weight: bold;
  }

  .speakers__event-about-description {
    text-align: center;
  }

  .speakers__event-about-stats {
    font-weight: bold;
  }

  .speakers__event-informations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .speakers__event-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .speakers__event-images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
