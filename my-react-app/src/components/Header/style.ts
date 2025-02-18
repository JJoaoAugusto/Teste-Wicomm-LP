import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70px;

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
    font-size: 12px;
    font-weight: 300;
    color: var(--white);
  }

  .header__menu-link:hover {
    font-weight: 500;
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

    font-size: 12px;
    font-weight: 500;

    background-color: var(--purple);
    color: var(--white);

    border: none;
    font-weight: bold;

    cursor: pointer;
  }

  .header__button:hover {
    background-color: var(--blue-congresso-light);
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
    background-color: transparent;
    color: var(--white);

    border: none;
    font-size: 12px;
    font-weight: 400;

    cursor: pointer;
  }
`;
