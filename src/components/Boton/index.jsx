import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colorGray, colorPrimaryMedium, fuenteSecundaria } from '../UI/variables';

const BotonLink = styled(Link)`
    text-decoration: none;
    color: ${colorGray};
`

const StyleBoton  = styled.button`
    border: 1px solid ${colorGray};
    border-radius: 4px;
    padding: 2.1rem 3rem;
    text-transform: capitalize;
    background-color: transparent;
    text-decoration: none;
    font-size: 2.1rem;
    font-family: ${fuenteSecundaria};
    
    &:hover {
        border: 1px solid ${colorPrimaryMedium};
        background-color: ${colorGray};
    }

    &:hover > ${BotonLink} {
        color: ${colorPrimaryMedium};
        background-color: ${colorGray};
    }
`

const Boton = (props) => {

    const { contenido } = props;
    return (
        <StyleBoton>
                <BotonLink to={'/nuevoVideo'}>{contenido}</BotonLink> 
        </StyleBoton>
    )
}

export default Boton