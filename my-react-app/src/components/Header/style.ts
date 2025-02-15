import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: var(--blue-dark);

  .header__nav {
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
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
    font-weight: bold;
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
    background-color: var(--blue-mid);
    color: var(--white);
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  .header__language {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 45px;
  }

  .header__language-select {
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
`;
