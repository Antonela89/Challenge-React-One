
import React from 'react';
import styled from 'styled-components';
import { colorBlackDark, colorPrimaryMedium } from '../UI/variables'

const StyleFooter = styled.footer`
 width: 100%;
    background-color: ${colorBlackDark};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 6rem;
    border-top: 2px solid ${colorPrimaryMedium};
`
const StyleLogotipo = styled.img`
    width: 15%;
    height: 10%;
    `

const Footer = ( ) => {
    return (
        <StyleFooter>
           <StyleLogotipo src='..\..\src\assets\img\logo.png' alt='Logo'/>
        </StyleFooter>
    )
}

export default Footer