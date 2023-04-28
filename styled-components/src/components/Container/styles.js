import styled from "styled-components";

export const ContainerStyled = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ButtonStyled = styled.button`
    background-color: ${({theme})=> theme.buttons.buttonBuyBackground};
    color: ${({theme})=> theme.buttons.buttonBuyText};
    border: ${({theme})=> theme.buttons.buttonBuyborder};
    padding: 20px;
    border-radius: 5px;
    font-size: 20px;
    margin-top: 40px;
    margin-left: 30px;
    transition: 0.4s;
    &:hover {
        background-color: #bbb;
        color: #ff0044;
    }
`;

export const ButtonStyledBorder = styled(ButtonStyled).attrs((props) => ({
    type: "submit"
}))`
    background-color: ${({theme})=> theme.buttons.buttonSellBackground};
    color: ${({theme})=> theme.buttons.buttonSellText};
    border: ${({theme})=> theme.buttons.buttonSellborder};
`;