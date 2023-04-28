import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text};
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    p {
        margin: 0;
    }

    button {
        cursor: pointer;
    }
`;
