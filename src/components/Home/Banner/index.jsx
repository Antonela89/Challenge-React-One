import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/img/banner.jpg';
import {fuentePrincipal, colorGray} from '../../UI/variables'

const StyleBanner = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: end;
    position: relative;
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
        &:before {
            content:'';
            inset: 0;
            position: absolute;
            backdrop-filter: blur(1px);
        }
`

const Contenido = styled.div`
    width: 100%;
    height: 50%;
    position: absolute;  
    display: flex; 
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 5rem;
`

const Texto = styled.div`
    width: 40%;
    color: ${colorGray};
    font-family: ${fuentePrincipal};
`

const Textoh3 = styled.h3`
    font-size: 4.6rem;
    font-weight: 400;
    margin: 4rem 0 0.9rem 0;
`

const Textop = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    margin: 0;
` 

const Banner = () => {

    return (
        <StyleBanner>
            <Background />
            <Contenido>
                <Texto >
                    { /*Renderizado condicinal, se va a mostrar el titulo y descripcion del primer elemento del array*/ }
                    <Textoh3>Challenge React</Textoh3>
                    <Textop>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Textop>
                </Texto>
                {/* <StyleCard></StyleCard> */} 
            </Contenido>
        </StyleBanner>
    )
}

export default Banner