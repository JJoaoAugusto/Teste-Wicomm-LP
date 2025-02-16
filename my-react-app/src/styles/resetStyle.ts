import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
    font-family: 'Lato', sans-serif;

    background-color: var(--blue-dark);
    color: var(--white);

    width: 100%;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Rubik', sans-serif;
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
