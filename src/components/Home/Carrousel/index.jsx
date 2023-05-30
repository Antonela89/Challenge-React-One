import React from 'react';
import styled from 'styled-components';
import MultipleItems from '../Carrousel/Slider';

const StyleCarrousel = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
`

const Carrusel = ({categoria}) => {
    return (
        <StyleCarrousel>
            <MultipleItems categoria={categoria}/>
        </StyleCarrousel>
    )
}

export default Carrusel