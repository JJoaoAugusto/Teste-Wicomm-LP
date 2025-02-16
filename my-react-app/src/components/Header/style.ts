import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70px;

  background-color: var(--blue-mid);

  .header__nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    height: 45px;
  }

  .header__logo {
    height: 45px;
    width: 170px;
  }

  .header__menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .header__menu-item {
    list-style: none;
  }

  .header__menu-link {
    text-decoration: none;
    color: var(--white);
  }

  .header__actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 16px;
  }

  .header__button {
    width: 140px;
    height: 45px;

    background-color: var(--blue-light);
    color: var(--white);

    border: none;
    font-weight: bold;

    cursor: pointer;
  }

  .header__language {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 45px;

    border: none;
  }

  .header__language-select {
    background-color: var(--blue-dark);
    color: var(--white);

    border: none;
    font-weight: bold;

    cursor: pointer;
  }
`;
