import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70px;

  background-color: var(--blue-dark);
  .container-menu {
    width: 100%;
    height: 45px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .container-menu--logo {
    height: 45px;
    width: 170px;
  }

  .container-menu--list {
    width: 100%;
    height: 100%;
    gap: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .container-menu--functionality {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .container-menu--functionality > button {
    width: 140px;
    height: 45px;

    background-color: var(--blue-mid);
    color: var(--white);
  }

  .container-menu--functionality > fieldset {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 45px;
  }

  .container-menu--functionality > fieldset > select {
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
  }
`;
