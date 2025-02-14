import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .container-comitte--organizing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .container-comitte-organizing--list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .container-comitte--scientific {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .container-comitte-scientific--list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    width: 100%;
  }
`;
