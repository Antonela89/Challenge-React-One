import Logo from '../Logo';
import Boton from '../Boton';
import styled from 'styled-components';
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

const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <Boton contenido ="nuevo video"/>
        </StyleHeader>
    )  
}

export default Header