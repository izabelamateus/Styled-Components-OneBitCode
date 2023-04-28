import React, { useState } from 'react';
import Title from "./../Title"
import { ButtonStyled, ButtonStyledBorder, ContainerStyled } from './styles';

function Container({ changeTheme }) {
    return (
        <ContainerStyled>
            <Title  />
            <ButtonStyled onClick={changeTheme}>Mudar Cor</ButtonStyled>
            <ButtonStyledBorder>Mudar cor</ButtonStyledBorder>
        </ContainerStyled>
    );
}

export default Container;