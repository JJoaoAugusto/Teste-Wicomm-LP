import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--blue-dark);
  color: var(--white);

  > nav {
    width: 100%;
    height: 45px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  nav > img {
    height: 45px;
    width: 170px;
  }

  nav > ul {
    width: 100%;
    height: 100%;
    gap: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  nav > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  nav > div > button {
    width: 140px;
    height: 45px;

    background-color: var(--blue-mid);
    color: var(--white);
  }

  nav > div > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 45px;
  }

  nav > div > div > select {
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
  }
`;
