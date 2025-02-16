import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-primary: 'Lora', sans-serif;
        --font-secondary: 'Inter', sans-serif;

        --blue-huntington: #00B0D8; 
        --blue-congresso: #00B0D9;
        --magenta-huntington: #EB526E;
        --green-huntington: #A2C746;
        --orange-huntington: #F5A732;
        --gray-huntington: #717171;
        --blue-dark-huntington: #005CA1;
        --blue-light-huntington: #98C6E9;
        --black: #101010;
        --white: #FFFFFF;

        --blue-dark: #050375;
        --blue-mid: #100D9D;
        --blue-light: #2231CF;
        --water-green: #0BF0CA;
        --purple: #B04EE1;

        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        width: 100vw;

        .title__one {
            font-size: 40px;
            font-weight: 900px;
        }

        .title__two {
            font-size: 36px;
            font-weight: 700px;
        }

        .title__tree {
            font-size: 32px;
            font-weight: 400px;
        }

        .title__for {
            font-size: 28px;
            font-weight: 300px;
        }

        .text__one {
            font-size: 21px;
            font-weight: 900px;
        }

        .text__two {
            font-size: 18px;
            font-weight: 700px;
        }

        .text__tree {
            font-size: 16px;
            font-weight: 400px;
        }

        .text__for {
            font-size: 12px;
            font-weight: 300px;
        }
    }
`;
