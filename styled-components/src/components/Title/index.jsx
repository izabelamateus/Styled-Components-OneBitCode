import React from 'react';
import { ParagrafhStyled, TitleStyled } from './styles';

function Title({changeColor}) {

    return (
        <>
            <TitleStyled isOn={changeColor}>Styled Components</TitleStyled>
            <ParagrafhStyled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam voluptatibus voluptatem nesciunt eos quasi recusandae. Culpa eos, eaque veniam, dolorem consectetur excepturi, odio numquam voluptas tenetur quasi nulla magnam!</ParagrafhStyled>
        </>
    );
}

export default Title;

