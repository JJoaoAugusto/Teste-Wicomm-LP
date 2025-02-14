import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-primary: 'Lora', sans-serif;
        --font-secondary: 'Inter', sans-serif;

        --blue-huntington: #00B0D8;
        --magenta-huntington: #EB526E;
        --green-huntington: #A2C746;
        --orange-huntington: #F5A732;
        --gray-huntington: #717171;
        --blue-dark-huntington: #005CA1;
        --blue-light-huntington: #98C6E9;
        --black: #101010;
        --white: #FFFFFF;

        --blue-dark: #050375;
        --blue-mid: #2231CF;

        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        width: 100vw;

        background-color: #050375;
        color: white;
    }
`;
