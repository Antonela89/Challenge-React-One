import styled from "styled-components";
import { colorGray, colorFrontend, fuentePrincipal } from '../UI/variables';


export const StyleTitulo = styled.div`
    display: inline-block;
    background-color: ${colorFrontend};
`
export const StyleH2 = styled.h2`
    background-color: ${colorFrontend};
    margin: 1rem 3rem;
    color: ${colorGray};
    font-family: ${fuentePrincipal};
    font-size: 4rem;
    font-size: 400;
    content: "${props => props.titulo}";
`

export const StyleCarrousel = styled.section`
display: flex;
align-items: center;
gap: 2rem;
`

export const StyleCard = styled.div`
width: 40%;
min-width: 25%;
height: 90%;
border: 4px solid ${colorFrontend} ;
border-radius: 4px;
color:${colorGray};
`
