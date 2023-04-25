import styled from 'styled-components';

const StyleLogo = styled.div`
    display: block;
    width: 10%;
    height: 10%;
    `

const StyleLogoImg = styled.img`
    width: 100%;
    height: 100%;
    `

const Logo = () => {
    return (
        <StyleLogo>
            <StyleLogoImg src='..\..\src\assets\img\logo.png' alt='Logo'/>
        </StyleLogo>
    )
}

export default Logo
