import React from 'react';
import Boton from '../Boton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NuevoVideo from '../../pages/NuevoVideo';
import Home from '../../pages/Home';
import { colorBlackDark, colorPrimaryMedium } from '../UI/variables';


const StyleHeader = styled.header`
    width: 100%;
    background-color: ${colorBlackDark};
    box-sizing: border-box;
    padding: 27px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${colorPrimaryMedium};
`

const StyleLogotipo = styled.img`
    width: 10%;
    height: 10%;
    `

const Header = () => {

    return (
            <StyleHeader>
                <Link to='/' element={<Home/>}><StyleLogotipo src='..\..\src\assets\img\logo.png' alt='Logo'/></Link>
                <Boton contenido ="nuevo video"element={<NuevoVideo/>}/>
            </StyleHeader>
    )  
}

export default Header