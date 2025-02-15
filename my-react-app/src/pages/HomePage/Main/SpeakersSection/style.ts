import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  .speakers__apresentation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .speakers__apresentation-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

  .speakers__speakers {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .speakers__speakers-title {
    font-weight: bold;
  }

  .speakers__speakers-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .speakers__speakers-item {
    width: 200px;
    height: 264px;
    border: solid black;
  }

  .speakers__speakers-button {
    margin-top: 16px;
  }

  .speakers__event {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
