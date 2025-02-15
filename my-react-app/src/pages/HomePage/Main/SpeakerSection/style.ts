import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .container-apresentation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .container-apresentation--title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .container-apresentation--vignette {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 900px;
    height: 500px;

    background-color: var(--white);
    color: var(--blue-mid);
  }

  .container-speakers {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .container-speakers--list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 16px;
  }

  .container-speakers--list > li {
    width: 200px;
    height: 264px;

    border: solid black;
  }

  .container-event {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .container-event--about {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    max-width: 500px;
  }

  .container-event--informations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .container-event--images {
  }
`;
