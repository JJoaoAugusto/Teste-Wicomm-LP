import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-primary: 'Lora', sans-serif;
        --font-secondary: 'Inter', sans-serif;

        --blue-dark-huntington: #005CA1;
        --blue-huntington: #00B0D8; 
        --blue-light-huntington: #98C6E9;
        --magenta-huntington: #EB526E;
        --green-huntington: #A2C746;
        --orange-huntington: #F5A732;
        --gray-huntington: #717171;
        
        --blue-congresso-dark-1: #000225;
        --blue-congresso-dark-2: #050C48;
        --blue-congresso: #050375;
        --blue-congresso-mid: #100D9D;
        --blue-congresso-light: #00B0D9;
        --green-congresso: #0BF0CA;
        --pink-congresso: #B04EE1;

        --purple: #2231CF;
        --black: #101010;
        --gray: #CDCDCD;
        --gray-light: #E3E3FF;
        --white: #FFFFFF;

        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        width: 100vw;        
    }
`;
