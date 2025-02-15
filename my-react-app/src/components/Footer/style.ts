import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 190px;

  .container-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
  }

  .container-footer--logo {
  }

  .coontainer-footer--contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .coontainer-footer--rules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`;
