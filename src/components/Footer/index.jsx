import styled from 'styled-components';
import Logo from '../Logo';
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

const Footer = ( ) => {
    return (
        <StyleFooter>
            <Logo/>
        </StyleFooter>
    )
}

export default Footer