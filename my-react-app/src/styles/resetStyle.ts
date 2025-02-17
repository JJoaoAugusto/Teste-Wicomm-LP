import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
    font-family: 'Rubik', sans-serif;

    background-color: var(--blue-congresso);
    color: var(--white);

    width: 100%;
    padding-bottom: 150px;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol {
        list-style: none;
    }

    input, textarea {
        border-radius: 0;
        border: none;
        background: transparent;
    }
`;
